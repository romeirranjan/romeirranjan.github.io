import { motion, useReducedMotion } from 'motion/react'

const nodes = [
  { x: 34, y: 50, size: 7, delay: 0 },
  { x: 88, y: 28, size: 5, delay: 0.3 },
  { x: 92, y: 78, size: 6, delay: 0.7 },
  { x: 148, y: 48, size: 9, delay: 0.15 },
  { x: 154, y: 105, size: 5, delay: 0.5 },
  { x: 210, y: 25, size: 6, delay: 0.85 },
  { x: 216, y: 78, size: 8, delay: 0.4 },
  { x: 270, y: 48, size: 6, delay: 0.65 },
  { x: 278, y: 108, size: 5, delay: 0.95 },
]

const connections = [
  [34, 50, 88, 28], [34, 50, 92, 78], [88, 28, 148, 48], [92, 78, 148, 48],
  [92, 78, 154, 105], [148, 48, 210, 25], [148, 48, 216, 78], [154, 105, 216, 78],
  [154, 105, 278, 108], [210, 25, 270, 48], [216, 78, 270, 48], [216, 78, 278, 108],
]

export function NetworkVisual() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="network-visual" aria-label="Animated neural network and embedding visualization" role="img">
      <div className="network-visual__header">
        <span><i /> AI data pipeline</span>
        <span>live exploration</span>
      </div>
      <svg viewBox="0 0 312 136" aria-hidden="true">
        <defs>
          <linearGradient id="network-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--visual-line-start)" />
            <stop offset="1" stopColor="var(--visual-line-end)" />
          </linearGradient>
        </defs>
        {connections.map(([x1, y1, x2, y2], index) => (
          <motion.line
            key={`${x1}-${y1}-${x2}-${y2}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#network-line)"
            strokeWidth="1"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 0.8, delay: 0.25 + index * 0.05 }}
          />
        ))}
        {nodes.map((node) => (
          <motion.circle
            key={`${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="var(--visual-node)"
            stroke="var(--visual-node-ring)"
            strokeWidth="5"
            initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
            animate={reduceMotion ? { scale: 1, opacity: 1 } : { scale: [1, 1.18, 1], opacity: 1 }}
            transition={{ duration: 2.8, delay: node.delay, repeat: reduceMotion ? 0 : Infinity, repeatDelay: 0.5 }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          />
        ))}
      </svg>
      <div className="network-visual__legend">
        <span>input</span><i /><span>embedding</span><i /><span>retrieval</span><i /><span>insight</span>
      </div>
      <div className="network-visual__metrics" aria-hidden="true">
        <span>DATA</span><span>MODEL</span><span>CONTEXT</span>
      </div>
    </div>
  )
}
