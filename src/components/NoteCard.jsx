import React from 'react'
import Link from 'next/link' 

export default function NoteCard({note}) {
  return (
    <Link
    href={`/notes/${note.id}`}
    className='note-card'

    >
        {note.title}

    </Link>

  )
}
