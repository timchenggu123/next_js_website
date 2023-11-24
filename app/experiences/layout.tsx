'use client'
import React from 'react'
import {motion} from 'framer-motion'

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="bg-primary-black">
    <motion.div
      initial={{scale: 0}}
      animate={{scale:1}}
      transition={{ duration: 0.5 }}
    >{children}</motion.div>
    </div>
  )
}