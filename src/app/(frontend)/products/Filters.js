'use client';
import Slider from 'rc-slider';
import React, { useEffect, useState } from 'react';

const Filters = ({ data, onFilterUpdate }) => {
    const [filters, setFilters] = useState({
        brand: [],
        color: [],
        size: [],
        price: 1000
    });
    const [activeColors, setActiveColors] = useState([]);

    const uniqueColors = Array.from(new Set(data.flatMap(item => item.colors)));
    const uniqueBrand = Array.from(new Set(data.flatMap(item => item.brand)));
    const uniqueSize = Array.from(new Set(data.flatMap(item => item.size)));

    useEffect(() => {
        filterProducts();
    }, [filters]);

    const handleFilterChange = (type, value) => {
        setFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            if (type === 'price') {
                newFilters[type] = value;
            } else {
                if (newFilters[type].includes(value)) {
                    newFilters[type] = newFilters[type].filter(item => item !== value);
                } else {
                    newFilters[type].push(value);
                }
            }
            return newFilters;
        });

        if (type === 'color') {
            if (activeColors.includes(value)) {
                setActiveColors(activeColors.filter(color => color !== value));
            } else {
                setActiveColors([...activeColors, value]);
            }
        }
    };

    const filterProducts = () => {
        let filtered = data;

        if (filters.brand.length > 0) {
            filtered = filtered.filter(product => filters.brand.includes(product.brand));
        }

        if (filters.color.length > 0) {
            filtered = filtered.filter(product => product.colors.some(color => filters.color.includes(color)));
        }

        if (filters.size.length > 0) {
            filtered = filtered.filter(product => product.size.some(size => filters.size.includes(size)));
        }

        filtered = filtered.filter(product => product.price <= filters.price);

        onFilterUpdate(filtered);
    };

    return (
        <div className="collection-filter-block">
            <div className="collection-mobile-back">
                <span className="filter-back"><i className="fa fa-angle-left" aria-hidden="true"></i> back</span>
            </div>

            <div className="collection-collapse-block">
                <h3 className="collapse-block-title">brand</h3>
                <div className="collection-collapse-block-content">
                    <div className="collection-brand-filter">
                        {uniqueBrand.map((brand, index) => (
                            <div className="form-check collection-filter-checkbox" key={index}>
                                <input type="checkbox" className="form-check-input" id={brand} onChange={() => handleFilterChange('brand', brand)} />
                                <label className="form-check-label" htmlFor={brand}>{brand}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="collection-collapse-block">
                <h3 className="collapse-block-title">colors</h3>
                <div className="collection-collapse-block-content">
                    <div className="color-selector">
                        <ul>
                            {uniqueColors.map((color, index) => (
                                <li className={activeColors.includes(color) ? 'active' : ''} key={index} style={{ backgroundColor: color }} onClick={() => handleFilterChange('color', color)}></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="collection-collapse-block border-0">
                <h3 className="collapse-block-title">size</h3>
                <div className="collection-collapse-block-content">
                    <div className="collection-brand-filter">
                        {uniqueSize.map((size, index) => (
                            <div className="form-check collection-filter-checkbox" key={index}>
                                <input type="checkbox" className="form-check-input" id={size} onChange={() => handleFilterChange('size', size)} />
                                <label className="form-check-label" htmlFor={size}>{size}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="collection-collapse-block border-0">
                <h3 className="collapse-block-title">price</h3>
                <div className="collection-collapse-block-content">
                    <div className="wrapper mt-5">
                        <div className="range-slider">
                            <Slider min={0} max={1000} onChange={(value) => handleFilterChange('price', value)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;
