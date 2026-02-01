import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 9800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 3800 },
  { name: 'Jul', value: 4300 },
  { name: 'Aug', value: 6200 },
  { name: 'Sep', value: 7100 },
  { name: 'Oct', value: 8900 },
  { name: 'Nov', value: 9500 },
  { name: 'Dec', value: 11200 },
];

export function TrafficChart() {
  return (
    <div className="relative rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-xl">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FF9D]/20 to-[#7B2CBF]/20 rounded-xl blur opacity-30"></div>
      
      <div className="relative">
        <div className="mb-6">
          <h3 className="font-['Poppins'] text-xl font-bold text-white mb-1">Organic Traffic Growth</h3>
          <p className="text-sm text-gray-400 font-['Poppins']">Monthly visitors</p>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00FF9D" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#00FF9D" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis 
                dataKey="name" 
                stroke="rgba(255,255,255,0.3)"
                style={{ fontFamily: 'Poppins', fontSize: '12px' }}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.3)"
                style={{ fontFamily: 'Poppins', fontSize: '12px' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  border: '1px solid rgba(0, 255, 157, 0.2)',
                  borderRadius: '8px',
                  fontFamily: 'Poppins',
                }}
                labelStyle={{ color: '#00FF9D' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#00FF9D" 
                strokeWidth={3}
                dot={{ fill: '#00FF9D', r: 4 }}
                activeDot={{ r: 6, fill: '#00FF9D' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="px-4 py-3 rounded-lg bg-black/40 border border-white/5">
            <div className="text-sm text-gray-400 mb-1 font-['Poppins']">Total Visits</div>
            <div className="text-2xl font-bold text-white font-['Poppins']">76.8K</div>
            <div className="text-xs text-[#00FF9D] mt-1">↑ 23.5%</div>
          </div>
          <div className="px-4 py-3 rounded-lg bg-black/40 border border-white/5">
            <div className="text-sm text-gray-400 mb-1 font-['Poppins']">Avg. Duration</div>
            <div className="text-2xl font-bold text-white font-['Poppins']">3m 42s</div>
            <div className="text-xs text-[#00FF9D] mt-1">↑ 12.3%</div>
          </div>
          <div className="px-4 py-3 rounded-lg bg-black/40 border border-white/5">
            <div className="text-sm text-gray-400 mb-1 font-['Poppins']">Bounce Rate</div>
            <div className="text-2xl font-bold text-white font-['Poppins']">32%</div>
            <div className="text-xs text-[#00FF9D] mt-1">↓ 8.2%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
