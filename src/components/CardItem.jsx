import React from 'react';

const CardItem = ({ name, birth_year, eye_color, gender, hair_color, skin_color }) => {
  const attributes = [
    { label: 'Gender', value: gender },
    { label: 'Birth year', value: birth_year },
    { label: 'Eye color', value: eye_color },
    { label: 'Hair color', value: hair_color },
    { label: 'Skin color', value: skin_color },
  ];

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>

        <div className="card-actions flex-col justify-end">
          {attributes.map(
            (attr) =>
              attr.value && (
                <p key={attr.label}>
                  <span className="font-semibold">{attr.label}:</span> {attr.value}
                </p>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
