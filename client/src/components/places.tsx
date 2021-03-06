
import Cookies from 'universal-cookie';

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";
  import "@reach/combobox/styles.css";
  
  type PlacesProps = {
    setOffice: (position: google.maps.LatLngLiteral) => void;
  };

   
export const cookies = new Cookies();

  
  export default function Places({ setOffice }: PlacesProps) {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete();
    
    const handleSelect = async (val: string) => {
      setValue(val, false);
      clearSuggestions();
      
      const results = await getGeocode({ address: val });
      const { lat, lng } = await getLatLng(results[0]);
      setOffice({ lat, lng });
    };

    function func(e){
      cookies.set('location',value);
      console.log(cookies.get('location'));
      setValue(e.target.value)    
        
    }

    return (
      <>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={func}
          disabled={!ready}
          className="combobox-input"
          placeholder="Search Police Stations"
          />
        <p>{value}</p>
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
                ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>

                </>
      
    );
  }
  