import React from 'react';
import PropTypes from 'prop-types';
export interface TaskProps {
    task: {
        id: string;
        title: string;
        state: string;
    };
    onArchiveTask: (id: string) => void;
    onPinTask: (id: string) => void;
};

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }: TaskProps) {
  return (
    <div className={`list-item ${state}`}>
        <label
            htmlFor="checked"
            aria-label={`archiveTask-${id}`}
            className="checkbox"
        >
            <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
        />
      </label>

      <label htmlFor="title" aria-label={title} className="title">
        <input
            id='title' 
            type="text" 
            value={title} 
            readOnly={true} 
            name="title" 
        />
      </label>
      {state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
}

Task.prototype = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
};

