const ImageDisplay = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <figure className="md:w-1/2">
      <img src={imgUrl} alt="Gym" className="w-full h-full object-cover" />
    </figure>
  );
};

// TODO: create a form that can render any components
export interface AllowedFormFields {
  [key: string]: string | number;
}

export function Form<AllowedFormFields>({
  fields,
}: {
  fields: AllowedFormFields;
}) {
  console.log(fields);
  return (
    <div className="card-body">
      <h2 className="card-title">
        New movie is released!
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>Click the button to watch on Jetflix app.</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Watch</button>
      </div>
    </div>
  );
}
