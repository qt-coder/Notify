import React, {useState} from 'react'
import styles from '../styles/Card.module.css'

function NotePreviewGrid() {

    const [notes, setNotes] = useState([
        {title: 'title', description: 'desc'}
    ])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.pagetitle}>Your Notes</h1>
                <div className={styles.grid}>
                    {notes.map((note, id) => (
                        <a href={`/editor/${id}`} className={styles.card} key={id}>
                            <h2>{note.title}</h2>
                            <p>{note.description}</p>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default NotePreviewGrid
