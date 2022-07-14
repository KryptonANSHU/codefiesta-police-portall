import { useLoadScript } from "@react-google-maps/api";

import Map from "../../components/map.tsx"
import './mapStyle.css'

export default function Home() {
  <h1>Hello</h1>
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:'AIzaSyDzilUVoaHs_jb6JSrEK9RO2qF6D69HIYU',
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return(
    <Map />

  );
}
