import { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState(""); // Thêm state để xử lý lỗi

  const url = "https://api.lyrics.ovh/v1/";

  const handleSearch = async () => {
    setIsShow(false); // Đảm bảo reset trước mỗi lần tìm kiếm
    setError(""); // Reset lỗi cũ
    try {
      const res = await Axios.get(`${url}${artist}/${song}`);
      setLyrics(res.data.lyrics);
      setIsShow(true);
    } catch (err) {
      setError("Không tìm thấy lời bài hát. Vui lòng thử lại!"); // Hiển thị lỗi
    }
  };

  return (
    <>
      <h2 className="title">Lyric Finder</h2>
      <div className="container-search">
        <input
          placeholder="Artist name"
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          placeholder="Song name"
          onChange={(e) => setSong(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <hr />
      {isShow && <pre>{lyrics}</pre>}
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Hiển thị lỗi */}
    </>
  );
}

export default App;
