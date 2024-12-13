"use client"
import '@xterm/xterm/css/xterm.css';
import WebTerminal from './webTerminal';

function TerminalSection() {
  

  return (
    <main className="">
      <div className="w-full h-[100vh]">
        <WebTerminal />
      </div>
    </main>
  );
}

export default TerminalSection;