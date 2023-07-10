import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner"></div>
    </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Event listeners for user interactions
document.addEventListener('keyup', handleKeyUp);
document.querySelector('#save-button').addEventListener('click', handleSave);

function handleKeyUp(event) {
  // Handle typing or formatting events
  // Update the editor content or perform specific actions based on user input
}

function handleSave(event) {
  // Handle save functionality
  // Retrieve the editor content and save it to IndexedDB or any other storage option
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}

// Additional methods and functionality in the Editor class
class Editor {
  constructor() {
    // Initialize the editor
    // Add any required properties or setup code

    // Example: Add undo/redo functionality
    this.undoStack = [];
    this.redoStack = [];
    document.addEventListener('keydown', this.handleUndoRedo.bind(this));
  }

  handleUndoRedo(event) {
    if (event.ctrlKey && event.key === 'z') {
      event.preventDefault();
      if (this.undoStack.length > 0) {
        const lastState = this.undoStack.pop();
        this.redoStack.push(this.getCurrentState());
        this.restoreState(lastState);
      }
    } else if (event.ctrlKey && event.key === 'y') {
      event.preventDefault();
      if (this.redoStack.length > 0) {
        const nextState = this.redoStack.pop();
        this.undoStack.push(this.getCurrentState());
        this.restoreState(nextState);
      }
    }
  }

  getCurrentState() {
    // Get the current state of the editor content
    // Return the content or any relevant data
  }

  restoreState(state) {
    // Restore the editor state to a previous state
    // Update the editor content or perform other necessary actions
  }

  // Other methods and functionality...
}

// Additional error handling and fallbacks
window.addEventListener('error', handleError);

function handleError(event) {
  // Handle errors and exceptions
  // Provide appropriate feedback to the user or perform fallback actions
}

// Code optimization and refactoring
// Review and optimize the code for performance, readability, and best practices

// Run other initialization code or setup

