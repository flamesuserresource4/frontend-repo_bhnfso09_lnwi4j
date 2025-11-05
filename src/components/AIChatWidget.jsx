import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I’m the WisdomWorks assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input.trim() };
    const botReply = {
      role: 'bot',
      text: "Thanks! I can help you find experts, explain how it works, or guide you to book a session.",
    };
    setMessages((m) => [...m, userMsg, botReply]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-3 w-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-teal-700 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-semibold">WisdomWorks AI</span>
            </div>
            <button aria-label="Close chat" onClick={() => setOpen(false)} className="rounded p-1 hover:bg-white/10">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-80 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((m, i) => (
              <div key={i} className={`rounded-xl px-3 py-2 text-sm ${m.role === 'user' ? 'ml-auto max-w-[80%] bg-teal-50 text-teal-900' : 'mr-auto max-w-[90%] bg-slate-100 text-slate-800'}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-slate-200 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-300"
              placeholder="Ask about experts, booking, pricing..."
            />
            <button onClick={sendMessage} className="inline-flex items-center justify-center rounded-xl bg-amber-500 p-2 text-white hover:bg-amber-600" aria-label="Send">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-teal-800"
      >
        <MessageCircle className="h-4 w-4" /> Chat with us
      </button>
    </div>
  );
}
