"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const GRID_SIZE = 12;
const BASE_POOPS = 6;
const BASE_SPAWN_INTERVAL = 2500;

type Position = { x: number; y: number };

function getRandomPosition(exclude: Position[]): Position {
  let pos: Position;
  do {
    pos = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (exclude.some((p) => p.x === pos.x && p.y === pos.y));
  return pos;
}

// Simple 8-bit style audio using Web Audio API
function useGameAudio() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const melodyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startMusic = useCallback(() => {
    if (isPlayingRef.current) return;

    try {
      const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;

      const playNote = (freq: number, startTime: number, duration: number) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        osc.type = "square";
        osc.frequency.value = freq;
        noteGain.gain.setValueAtTime(0.08, startTime);
        noteGain.gain.exponentialRampToValueAtTime(0.01, startTime + duration * 0.9);
        osc.connect(noteGain);
        noteGain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration);
      };

      // Catchy 8-bit melody
      const melody = [
        262, 262, 392, 392, 440, 440, 392, 0,
        349, 349, 330, 330, 294, 294, 262, 0,
        392, 392, 349, 349, 330, 330, 294, 0,
        392, 392, 349, 349, 330, 330, 294, 0,
      ];

      isPlayingRef.current = true;

      const playMelody = () => {
        if (!isPlayingRef.current || !audioContextRef.current) return;
        const ctx = audioContextRef.current;
        const now = ctx.currentTime;

        melody.forEach((freq, i) => {
          if (freq > 0) {
            playNote(freq, now + i * 0.15, 0.12);
          }
        });

        melodyTimeoutRef.current = setTimeout(playMelody, melody.length * 150);
      };

      playMelody();
    } catch {
      // Audio not supported
    }
  }, []);

  const stopMusic = useCallback(() => {
    isPlayingRef.current = false;
    if (melodyTimeoutRef.current) {
      clearTimeout(melodyTimeoutRef.current);
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  }, []);

  const playSound = useCallback((type: "move" | "win" | "lose") => {
    try {
      const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "move") {
        osc.type = "square";
        osc.frequency.value = 520;
        gain.gain.value = 0.05;
        osc.start();
        osc.stop(ctx.currentTime + 0.04);
      } else if (type === "win") {
        osc.type = "square";
        gain.gain.value = 0.12;
        osc.frequency.setValueAtTime(523, ctx.currentTime);
        osc.frequency.setValueAtTime(659, ctx.currentTime + 0.12);
        osc.frequency.setValueAtTime(784, ctx.currentTime + 0.24);
        osc.frequency.setValueAtTime(1047, ctx.currentTime + 0.36);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      } else if (type === "lose") {
        osc.type = "sawtooth";
        gain.gain.value = 0.12;
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.6);
        osc.start();
        osc.stop(ctx.currentTime + 0.6);
      }
    } catch {
      // Audio not supported
    }
  }, []);

  return { startMusic, stopMusic, playSound };
}

export default function GamePage() {
  const [player, setPlayer] = useState<Position>({ x: 0, y: 0 });
  const [toilet, setToilet] = useState<Position>({ x: GRID_SIZE - 1, y: GRID_SIZE - 1 });
  const [poops, setPoops] = useState<Position[]>([]);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(true);

  const { startMusic, stopMusic, playSound } = useGameAudio();

  // Calculate difficulty based on round
  const getInitialPoops = (r: number) => BASE_POOPS + (r - 1) * 5;
  const getSpawnInterval = (r: number) => Math.max(400, BASE_SPAWN_INTERVAL - (r - 1) * 350);
  const getMaxPoops = (r: number) => 15 + (r - 1) * 12;

  const initGame = useCallback((newRound: number = 1, keepScore: boolean = false) => {
    const numPoops = BASE_POOPS + (newRound - 1) * 5;
    const initialPoops: Position[] = [];
    const excludePositions = [
      { x: 0, y: 0 },
      { x: GRID_SIZE - 1, y: GRID_SIZE - 1 },
    ];

    for (let i = 0; i < numPoops; i++) {
      const newPoop = getRandomPosition([...excludePositions, ...initialPoops]);
      initialPoops.push(newPoop);
    }

    setPlayer({ x: 0, y: 0 });
    setToilet({ x: GRID_SIZE - 1, y: GRID_SIZE - 1 });
    setPoops(initialPoops);
    setRound(newRound);
    setGameOver(false);
    setGameWon(false);
    setGameStarted(true);

    if (!keepScore) {
      setScore(0);
    }
  }, []);

  const startNewGame = useCallback(() => {
    initGame(1, false);
    if (musicEnabled) {
      startMusic();
    }
  }, [initGame, musicEnabled, startMusic]);

  const nextRound = useCallback(() => {
    playSound("win");
    initGame(round + 1, true);
  }, [initGame, round, playSound]);

  const movePlayer = useCallback(
    (dx: number, dy: number) => {
      if (gameOver || gameWon || !gameStarted) return;

      playSound("move");
      setPlayer((prev) => {
        const newX = Math.max(0, Math.min(GRID_SIZE - 1, prev.x + dx));
        const newY = Math.max(0, Math.min(GRID_SIZE - 1, prev.y + dy));
        return { x: newX, y: newY };
      });
    },
    [gameOver, gameWon, gameStarted, playSound]
  );

  // Handle keyboard input - prevent scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " ", "Enter"].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case "ArrowUp":
        case "w":
          movePlayer(0, -1);
          break;
        case "ArrowDown":
        case "s":
          movePlayer(0, 1);
          break;
        case "ArrowLeft":
        case "a":
          movePlayer(-1, 0);
          break;
        case "ArrowRight":
        case "d":
          movePlayer(1, 0);
          break;
        case " ":
        case "Enter":
          if (!gameStarted || gameOver) {
            startNewGame();
          } else if (gameWon) {
            nextRound();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [movePlayer, startNewGame, nextRound, gameStarted, gameOver, gameWon]);

  // Check collisions
  useEffect(() => {
    if (!gameStarted) return;

    // Check if player reached toilet
    if (player.x === toilet.x && player.y === toilet.y) {
      setGameWon(true);
      setScore((s) => s + 100 * round);
      return;
    }

    // Check if player hit poop
    const hitPoop = poops.some((p) => p.x === player.x && p.y === player.y);
    if (hitPoop) {
      setGameOver(true);
      playSound("lose");
      stopMusic();
    }
  }, [player, toilet, poops, gameStarted, round, playSound, stopMusic]);

  // Spawn new poops periodically - faster each round
  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return;

    const spawnInterval = getSpawnInterval(round);
    const maxPoops = getMaxPoops(round);

    const interval = setInterval(() => {
      setPoops((prev) => {
        if (prev.length >= maxPoops) return prev;
        const newPoop = getRandomPosition([player, toilet, ...prev]);
        return [...prev, newPoop];
      });
    }, spawnInterval);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver, gameWon, player, toilet, round]);

  // Score ticker - faster each round
  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return;

    const interval = setInterval(() => {
      setScore((s) => s + round);
    }, 100);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver, gameWon, round]);

  // Cleanup music on unmount
  useEffect(() => {
    return () => stopMusic();
  }, [stopMusic]);

  const toggleMusic = () => {
    if (musicEnabled) {
      stopMusic();
    } else if (gameStarted && !gameOver) {
      startMusic();
    }
    setMusicEnabled(!musicEnabled);
  };

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center p-2 overflow-hidden">
      <div className="text-center mb-3">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-pink mb-1" style={{ fontFamily: "monospace" }}>
          FIND THE LOO
        </h1>
        <div className="flex items-center justify-center gap-4 text-lg font-bold font-mono">
          <span className="text-brand-green">SCORE: {score}</span>
          <span className="text-brand-orange">ROUND: {round}</span>
          {gameStarted && (
            <button
              onClick={toggleMusic}
              className="text-white/40 hover:text-white text-xs transition-colors"
            >
              {musicEnabled ? "🔊" : "🔇"}
            </button>
          )}
        </div>
      </div>

      {/* Game board */}
      <div
        className="grid gap-1 bg-white/10 p-2 rounded-lg"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
        }}
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
          const x = i % GRID_SIZE;
          const y = Math.floor(i / GRID_SIZE);
          const isPlayer = player.x === x && player.y === y;
          const isToilet = toilet.x === x && toilet.y === y;
          const isPoop = poops.some((p) => p.x === x && p.y === y);

          return (
            <div
              key={i}
              className="w-6 h-6 md:w-8 md:h-8 rounded-sm flex items-center justify-center text-lg md:text-xl"
              style={{
                backgroundColor: isPlayer
                  ? "#1B7340"
                  : isToilet
                  ? "#5CB8E4"
                  : isPoop
                  ? "#4a3728"
                  : "rgba(255,255,255,0.05)",
              }}
            >
              {isPlayer && "🏃"}
              {isToilet && !isPlayer && "🚽"}
              {isPoop && !isPlayer && "💩"}
            </div>
          );
        })}
      </div>

      {/* Controls info */}
      <div className="mt-3 text-center">
        {!gameStarted && (
          <div className="space-y-2">
            <p className="text-white/80">
              Get to the 🚽 before you step in 💩
            </p>
            <button
              onClick={startNewGame}
              className="bg-brand-pink text-white font-bold px-8 py-3 rounded-full hover:bg-brand-green transition-colors"
            >
              START GAME
            </button>
            <p className="text-white/40 text-xs">Press ENTER or SPACE</p>
          </div>
        )}

        {gameWon && (
          <div className="space-y-2">
            <p className="text-brand-green text-xl font-bold">🎉 ROUND {round} COMPLETE!</p>
            <p className="text-white/60 text-sm">Score: {score}</p>
            <button
              onClick={nextRound}
              className="bg-brand-green text-white font-bold px-8 py-3 rounded-full hover:bg-brand-pink transition-colors"
            >
              NEXT ROUND
            </button>
            <p className="text-white/40 text-xs">Press ENTER or SPACE</p>
          </div>
        )}

        {gameOver && (
          <div className="space-y-2">
            <p className="text-brand-orange text-xl font-bold">💩 You stepped in it!</p>
            <p className="text-white/60 text-sm">Score: {score} (Round {round})</p>
            <button
              onClick={startNewGame}
              className="bg-brand-orange text-white font-bold px-8 py-3 rounded-full hover:bg-brand-pink transition-colors"
            >
              TRY AGAIN
            </button>
            <p className="text-white/40 text-xs">Press ENTER or SPACE</p>
          </div>
        )}

        {gameStarted && !gameOver && !gameWon && (
          <p className="text-white/40 text-xs">Arrow keys or WASD to move</p>
        )}
      </div>

      {/* Mobile controls */}
      {gameStarted && !gameOver && !gameWon && (
        <div className="mt-3 md:hidden">
          <div className="grid grid-cols-3 gap-1 w-28">
            <div />
            <button
              onClick={() => movePlayer(0, -1)}
              className="bg-white/20 rounded-lg p-3 active:bg-brand-green"
            >
              ↑
            </button>
            <div />
            <button
              onClick={() => movePlayer(-1, 0)}
              className="bg-white/20 rounded-lg p-3 active:bg-brand-green"
            >
              ←
            </button>
            <button
              onClick={() => movePlayer(0, 1)}
              className="bg-white/20 rounded-lg p-3 active:bg-brand-green"
            >
              ↓
            </button>
            <button
              onClick={() => movePlayer(1, 0)}
              className="bg-white/20 rounded-lg p-3 active:bg-brand-green"
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Back link */}
      <Link
        href="/"
        className="mt-3 text-white/40 hover:text-white text-xs transition-colors"
      >
        ← Back to saving the world
      </Link>
    </div>
  );
}
