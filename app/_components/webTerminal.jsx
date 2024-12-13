"use client"

import React, { useEffect, useRef, useState } from 'react'

import '@xterm/xterm/css/xterm.css'
import { Terminal } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import { SearchAddon } from '@xterm/addon-search'
import { WebLinksAddon } from '@xterm/addon-web-links'
import  commands  from './commands'

const WebTerminal = () => {
  const terminalRef = useRef(null)
  const terminalInstance = useRef(null) 

  useEffect(() => {
    if (!terminalRef.current) return

    const term = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: '"Cascadia Code", Menlo, monospace',
      theme: {
        background: '#000000',
        foreground: '#a9b1d6',
        cursor: '#f7768e',
        selection: '#33467C',
        black: '#32344a',
        red: '#f7768e',
        green: '#9ece6a',
        yellow: '#e0af68',
        blue: '#7aa2f7',
        magenta: '#ad8ee6',
        cyan: '#449dab',
        white: '#787c99',
        brightBlack: '#444b6a',
        brightRed: '#ff7a93',
        brightGreen: '#b9f27c',
        brightYellow: '#ff9e64',
        brightBlue: '#7da6ff',
        brightMagenta: '#bb9af7',
        brightCyan: '#0db9d7',
        brightWhite: '#acb0d0',
      },
    })

    const fitAddon = new FitAddon()
    const webLinksAddon = new WebLinksAddon()
    const searchAddon = new SearchAddon()

    term.loadAddon(fitAddon)
    term.loadAddon(webLinksAddon)
    term.loadAddon(searchAddon)

    term.open(terminalRef.current)
    fitAddon.fit()

    terminalInstance.current = term

    term.writeln('Welcome to the Muhammed Rahil Portfolio Terminal!')
    term.writeln('Type "help" for a list of available commands.')
    term.write('\r\n$ ')

    let localLine = ""; // Local variable to store the current line

    term.onKey(({ key, domEvent }) => {
      const printable = !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey   
      if (domEvent.keyCode === 13) { // Enter key is 13
        const command = localLine.trim();
        if (command) {
          term.writeln('') 
          const [cmd, ...args] = command.split(' ')
          if (commands[cmd]) {
            commands[cmd](term,args)
          } else {
            term.writeln(`Command not found: ${cmd}`)
          }
        }
        localLine = ""; // Reset the local line
        term.write('\r\n$ ')
      } else if (domEvent.keyCode === 8) { // backspace key
        if (term.buffer.active.cursorX > 2) {
          localLine = localLine.slice(0, -1);
          term.write('\b \b')
        }
      } else if (printable) {
        localLine += key; // Append the key to the local line
        term.write(key)
      }
    })

    const handleResize = () => {
      fitAddon.fit()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      term.dispose()
    }
  }, [])

  return <div ref={terminalRef} className="h-full w-full" />
}

export default WebTerminal

