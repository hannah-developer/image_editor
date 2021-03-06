import React from "react";
import filters from "./filters.js";
import Button from "./Button";

export default function InstaFilter({
    applyInstaFilter,
    imagePath,
    getFilterString,
}) {
    return (
        <>
            {filters.map(filter => (
                <Button
                    key={filter.name}
                    applyInstaFilter={applyInstaFilter}
                    filter={filter}
                    imagePath={imagePath}
                    getFilterString={getFilterString}
                />
            ))}
        </>
    );
}
