import React from 'react';

const ResultsList = props => {
    return (
        <div>
            {props.searchResults.images.length > 0
                ? <span>
                      The following was found matching the term '{props.searchResults.searchTerm}'
                  </span>
                : ''}
            <ul>
                {props.searchResults.images.map(image =>
                    <li key={image.id}>
                        {image.name}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ResultsList;
