# react-raffle-hook

A React hook for creating raffle/lottery systems with countdown and winner selection.

## Installation

```bash
npm install react-raffle-hook
```

or

```bash
yarn add react-raffle-hook
```

## Features

- 🎲 Random winner selection from participants
- ⏱️ Customizable countdown timer
- 🔄 Support for multiple winners
- 🎯 TypeScript support
- 🪝 Simple React hook API
- ⚡ Lightweight with zero dependencies (except React)

## Usage

```tsx
import { useRaffle } from 'react-raffle-hook';

function RaffleComponent() {
  const { winners, isRunning, countdown, startRaffle, resetRaffle } = useRaffle({
    participants: ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    winnerCount: 2,
    countdownTime: 5000,
    onStart: () => console.log('Raffle started!'),
    onFinish: (winners) => console.log('Winners:', winners),
  });

  return (
    <div>
      <h1>Raffle Draw</h1>
      
      {isRunning && <p>Drawing in {countdown / 1000}s...</p>}
      
      {winners.length > 0 && (
        <div>
          <h2>Winners:</h2>
          <ul>
            {winners.map((winner, index) => (
              <li key={index}>{winner}</li>
            ))}
          </ul>
        </div>
      )}
      
      <button onClick={startRaffle} disabled={isRunning}>
        Start Raffle
      </button>
      <button onClick={resetRaffle} disabled={isRunning}>
        Reset
      </button>
    </div>
  );
}
```

## API

### `useRaffle(options: RaffleOptions)`

#### Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `participants` | `(string \| number)[]` | **required** | Array of participants for the raffle |
| `winnerCount` | `number` | `1` | Number of winners to select |
| `countdownTime` | `number` | `3000` | Countdown duration in milliseconds |
| `onStart` | `() => void` | `undefined` | Callback fired when raffle starts |
| `onFinish` | `(winners) => void` | `undefined` | Callback fired when raffle finishes with winners |

#### Returns

| Property | Type | Description |
|----------|------|-------------|
| `participants` | `(string \| number)[]` | The participants array |
| `winners` | `(string \| number)[]` | Array of selected winners |
| `isRunning` | `boolean` | Whether the raffle is currently running |
| `countdown` | `number` | Current countdown value in milliseconds |
| `startRaffle` | `() => void` | Function to start the raffle |
| `resetRaffle` | `() => void` | Function to reset the raffle state |

## Examples

### Basic Example

```tsx
import { useRaffle } from 'react-raffle-hook';

function BasicRaffle() {
  const { winners, startRaffle } = useRaffle({
    participants: ['John', 'Jane', 'Bob', 'Alice'],
  });

  return (
    <div>
      <button onClick={startRaffle}>Draw Winner</button>
      {winners.length > 0 && <p>Winner: {winners[0]}</p>}
    </div>
  );
}
```

### Multiple Winners

```tsx
import { useRaffle } from 'react-raffle-hook';

function MultipleWinners() {
  const { winners, startRaffle } = useRaffle({
    participants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    winnerCount: 3,
  });

  return (
    <div>
      <button onClick={startRaffle}>Draw 3 Winners</button>
      {winners.length > 0 && (
        <div>
          <h3>Winners:</h3>
          {winners.map((winner) => <p key={winner}>{winner}</p>)}
        </div>
      )}
    </div>
  );
}
```

### With Custom Countdown

```tsx
import { useRaffle } from 'react-raffle-hook';

function CustomCountdown() {
  const { winners, isRunning, countdown, startRaffle, resetRaffle } = useRaffle({
    participants: ['Team A', 'Team B', 'Team C', 'Team D'],
    countdownTime: 10000, // 10 seconds
    onFinish: (winners) => {
      alert(`The winner is: ${winners[0]}`);
    },
  });

  return (
    <div>
      {isRunning && <h2>{countdown / 1000} seconds remaining...</h2>}
      {winners.length > 0 && <h1>🎉 Winner: {winners[0]}</h1>}
      
      <button onClick={startRaffle} disabled={isRunning}>
        Start Draw
      </button>
      <button onClick={resetRaffle}>Reset</button>
    </div>
  );
}
```

## TypeScript

This package includes TypeScript definitions out of the box.

```tsx
import { useRaffle, RaffleOptions } from 'react-raffle-hook';

const options: RaffleOptions = {
  participants: ['Alice', 'Bob', 'Charlie'],
  winnerCount: 1,
  countdownTime: 5000,
};

const raffle = useRaffle(options);
```

## License

MIT © melodyxpot

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Repository

[https://github.com/melodyxpot/react-raffle-hook](https://github.com/melodyxpot/react-raffle-hook)
