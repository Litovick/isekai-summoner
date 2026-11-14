import {GameProvider,useGame} from "./contexts/GameContext";
import TitleScreen from "./components/game/TitleScreen";
import WorldSelectScreen from "./components/game/WorldSelectScreen";
function Screens(){const {screen,notice,closeNotice}=useGame();return <><div className="min-h-screen bg-[#100b22]">{screen==="title"?<TitleScreen/>:<WorldSelectScreen/>}</div>{notice&&<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-5" role="dialog" aria-modal="true" aria-label="게임 준비 중"><div className="max-w-sm rounded-2xl border border-violet-400/40 bg-[#201437] p-8 text-center text-white shadow-2xl"><h2 className="text-2xl font-bold">아직 준비 중이에요</h2><p className="mt-3 text-violet-200">새로운 이세계 게임이 곧 추가됩니다.</p><button onClick={closeNotice} className="mt-6 rounded-full bg-[#6C4DFF] px-8 py-3 font-bold">확인</button></div></div>}</>}
export default function App(){return <GameProvider><Screens/></GameProvider>}
