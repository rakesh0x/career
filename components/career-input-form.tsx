// Placeholder for CareerInputForm component
import React from 'react';

interface CareerInputFormProps {
  onSubmit: (input: string) => Promise<void>;
  isLoading: boolean;
}

export function CareerInputForm({ onSubmit, isLoading }: CareerInputFormProps) {
  const [input, setInput] = React.useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(input);
      }}
      className="flex flex-col gap-2 w-full"
    >
      <label htmlFor="career-goal-input" className="sr-only">
        Describe your career goal
      </label>
      <input
        id="career-goal-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Describe your career goal..."
        className="rounded-md px-3 py-2 bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition w-full"
        autoComplete="off"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="mt-1 rounded-md bg-primary px-4 py-2 text-white font-semibold shadow hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="animate-pulse">Loading...</span>
        ) : (
          'Submit'
        )}
      </button>
    </form>
  );
}
