"use client";

import { useEffect, useState } from "react";
import "../../shared/styles/songs.css";

const TOKEN = "BQAVSAF32dID2IDq9pAvBQiwLl__uzc-Z4NWiv2puTa5_wzQB6-AcQSTR0P9KUBVebI30eujoMBhWquFTPDGzSQWucW6vpL09QFRlUM3VozVFORZI46opaiLrOYqP2s5VgpkVdVIy0mCM_ZITZX0Wc3kCrxTM7zY6FwfR8pOP1ySBPktU0-Wb8zZMVxyJDF1sV6k0uDrsQdL-wvq8kW-SoTXqtg0LnfUWj5GtHXLGZUYhjxi6j-I4y8iSDxt5SqpBb5lwYoJolftMUp8n0qGBBuKwcwok5Wbq3mSH0vUT5G9YMm5VX1rptjodIRq3L865Mbggw";

interface Artist {
  name: string;
}

interface Track {
  name: string;
  artists: Artist[];
}

async function fetchWebApi(endpoint: string, method: string, body?: object): Promise<any> {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    method,
    body: body ? JSON.stringify(body) : undefined,
  });
  return await res.json();
}

async function getTopTracks(): Promise<Track[]> {
  const data = await fetchWebApi("v1/me/top/tracks?time_range=long_term&limit=5", "GET");
  return data.items;
}

export default function SpotifyTopTracks() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTopTracks()
      .then((data) => {
        setTracks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message ?? "Failed to fetch tracks.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="spotify-status">Loading top tracks…</p>;
  if (error)   return <p className="spotify-status spotify-error">{error}</p>;

  return (
    <ul className="spotify-track-list">
      {tracks.map(({ name, artists }, index) => (
        <li key={index} className="spotify-track-item">
          <span className="spotify-track-index">{index + 1}</span>
          <span className="spotify-track-name">{name}</span>
          <span className="spotify-track-artists">
            {artists.map((a) => a.name).join(", ")}
          </span>
        </li>
      ))}
    </ul>
  );
}