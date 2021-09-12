import React from "react";
import styles from "./Formular.module.css";
import useSelectCategory from "../hooks/useSelectCategory";
import useSelectCountry from "../hooks/useSelectCountry";
import PropTypes from "prop-types";

const Formular = ({ addCategory, addCountry }) => {
    const CATEGORY_OPTIONS = [
        { value: "general", label: "General" },
        { value: "business", label: "Business" },
        { value: "entertainment", label: "Entertainment" },
        { value: "health", label: "Health" },
        { value: "science", label: "Science" },
        { value: "technology", label: "Technology" },
        { value: "sports", label: "Sports" },
    ];

    const COUNTRY_OPTIONS = [
        { value: "ca", label: "Canada" },
        { value: "fr", label: "France" },
        { value: "de", label: "Germany" },
        { value: "mx", label: "Mexico" },
        { value: "pt", label: "Portugal" },
        { value: "us", label: "United States" },
        { value: "gb", label: "United Kindom" },
    ];

    const [category, SelectCategory] = useSelectCategory(
        "general",
        CATEGORY_OPTIONS
    );

    const [country, SelectCountry] = useSelectCountry("us", COUNTRY_OPTIONS);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addCategory(category);
        addCountry(country);
    };

    return (
        <div className={`row ${styles.search}`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <h2 className={styles.heading}>Find News by Category</h2>
                    <SelectCountry />
                    <SelectCategory />
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

Formular.propTypes = {
    addCategory: PropTypes.func.isRequired,
    addCountry: PropTypes.func.isRequired,
};

export default Formular;
