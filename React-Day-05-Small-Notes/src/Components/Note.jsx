

import React from 'react'

const Note = (props) => {
    console.log(props);
    return (
        <div className="max-w-xs bg-[#1e1e1e] w-50 h-40 border border-white/10 p-4 rounded-xl hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group">
            <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded">Personal</span>
                <span className="text-xs text-gray-500">Oct 24</span>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {props.title}
            </h3>

            <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                {props.content}
            </p>
        </div>

    )
}

export default Note
