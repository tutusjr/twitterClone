/* eslint-disable react/prop-types */
import { useState } from "react";
export default function Poll({ poll: pollData }) {
  const [poll, setPoll] = useState(pollData);

  return (
    <div className="mt-3 grid gap-1">
      {!poll.voted && poll.answers.map((answer) => (
            <button
              onClick={() => { setPoll({
                  ...poll,
                  voted: true,
                  votes: poll.votes + 1,
                  answers:  poll.answers.map((a) => {
                      if (a.id === answer.id) {
                        return {
                          ... a,
                          votes: a.votes + 1,
                        };
                      }
                      return a;
                    }),
                });
              }}
              key={answer.id}
              className="h-8 border border-[color:var(--color-primary)] rounded-full text-[color:var(--color-primary)] font-bold hover:bg-[color:var(--color-primary-alpha)] transition-colors"
            >
              {answer.text}
            </button>
          ))}
      {poll.voted && poll.answers.map((answer) => (
            <div key={answer.id} className="h-8 flex items-center justify-between relative overflow-hidden rounded-md px-2 z-[1]">
                <div
                className="absolute h-full left-0 top-0 bg-[color:var(--color-base-secondary)] opacity-50 z-[-1]"
                style={{ width: ((answer.votes / poll.votes) * 100) + '%'}} 
                />
                <span>{answer.text}</span>
                <span>{((answer.votes / poll.votes) * 100).toFixed(1) + '%'}</span>
            </div>
            
            ))}
            <div className="text-[color:var(--color-base-secondary)] mt-2">
                {poll.votes} oy · 6 gün kaldı
            </div>
    </div>
  );
}
