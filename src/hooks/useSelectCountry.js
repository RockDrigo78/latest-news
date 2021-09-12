import React, { useState } from "react";

const useSelectCountry = (initialState, options) => {
    const [countryState, updateState] = useState(initialState);

    const SelectCountry = () => (
        <select
            className="browser-default"
            value={countryState}
            onChange={(e) => updateState(e.target.value)}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );

    return [countryState, SelectCountry];
};

export default useSelectCountry;
