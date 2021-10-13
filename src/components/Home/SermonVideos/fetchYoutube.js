const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

const playListID = "PLFUMwhEewxml_TxRX_ZtEiumP9qQW_qHy";
export async function fetchYoutube() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=6&playlistId=${playListID}&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();

  //   console.log(data);
  return data;
}
