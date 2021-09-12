import React, { useState } from "react";

const useSelectCategory = (initialState, options) => {
    const [categoryState, updateState] = useState(initialState);

    const SelectCategory = () => (
        <select
            className="browser-default"
            value={categoryState}
            onChange={(e) => updateState(e.target.value)}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );

    return [categoryState, SelectCategory];
};

export default useSelectCategory;
