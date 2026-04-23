import { useState } from 'react';
import Note from './Components/Note';

const App = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  // 1. Saare notes ko store karne ke liye ek array state
  const [allNotes, setAllNotes] = useState([]);

  function submithandler(e) {
    e.preventDefault();
    if (!title || !content){ return }; // Khali note save na ho

    // 2. Naya note object banayein
    const newNote = {
      id: Date.now(), // Unique ID delete/edit ke liye kaam aati hai
      title: title,
      content: content
    };

    // 3. Purane notes ke saath naya note add karein
    setAllNotes([...allNotes, newNote]);

    // Input fields clear karein
    setTitle("");
    setContent("");
  }

  return (
    // Flex-row layout: Left mein form, right mein notes
    <div className="w-full min-h-screen p-10 bg-gray-900 flex flex-col md:flex-row gap-10">
      
      {/* Left Side: Form Container */}
      <div className="w-full md:w-1/3">
        <div className="p-6 bg-[#121212] rounded-lg border border-white/10 sticky top-10">
          <h2 className=" mb-4 font-bold text-xl text-cyan-500">Create Note</h2>
          <form className="flex flex-col space-y-4" onSubmit={submithandler}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              className="bg-transparent text-xl font-semibold text-white outline-none placeholder-gray-600 border-b border-white/5 pb-2"
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              rows="4"
              placeholder="Start writing..."
              value={content}
              className="bg-transparent text-gray-300 outline-none resize-none placeholder-gray-600"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-cyan-600 text-white px-6 py-2 rounded-md text-sm font-bold hover:bg-cyan-500 transition-all active:scale-95"
              >
                Save Note
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side: Notes Display Container */}
      <div className="w-full md:w-2/3 flex flex-wrap gap-4 content-start"> 
         {/* 4. Map function use karke saare notes dikhayein */}
         {allNotes.length > 0 ? (
           allNotes.map((note) => (
             <Note key={note.id} title={note.title} content={note.content} />
           ))
         ) : (
           <p className="text-gray-600 italic">No notes added yet. Start writing!</p>
         )}
      </div>
    </div>
  );
}





export default App;