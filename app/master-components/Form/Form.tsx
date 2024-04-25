// TODO: create a form that can render any components
export interface FormField {
  value: string | number;
  type: string;
  placeholder: string;
  key: string;
}

export function Form({
  fields,
  onSubmit,
  title,
}: {
  fields: FormField[];
  onSubmit: () => void;
  title: string;
}) {
  const generateStringFormInput = ({ placeholder, key }: FormField) => (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        htmlFor={key}
        className="input input-bordered flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="text" className="grow" placeholder={placeholder || key!} />
      </label>
    </>
  );

  const formsFieldMarkup = fields.map((field) => {
    if (field.type === "string") {
      return generateStringFormInput(field);
    }
    return null;
  });

  return (
    <div className="card-body">
      <h2 className="card-title">
        {title}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <form onSubmit={onSubmit}>
        {formsFieldMarkup}

        <div className="card-actions justify-end">
          <button type="submit" className="btn btn-primary">
            {title}
          </button>
        </div>
      </form>
    </div>
  );
}
