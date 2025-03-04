const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex mt-2">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-violet-900 checkbox-primary" 
                checked={selectedGender === "male"}
                onChange={() => onCheckboxChange("male")}
                />
            </label>
        </div>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                <span className="label-text">Female</span> 
                <input type="checkbox" className="checkbox border-violet-900 checkbox-primary" 
                checked={selectedGender === "female"}
                onChange={() => onCheckboxChange("female")}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox


/* STARTER CODE GENDER BOX COMP 

const GenderCheckbox = () => {
    return (
      <div className="flex mt-2">
          <div className="form-control">
              <label className={"label gap-2 cursor-pointer"}>
                  <span className="label-text">Male</span>
                  <input type="checkbox" className="checkbox border-violet-900 checkbox-primary" />
              </label>
          </div>
          <div className="form-control">
              <label className={"label gap-2 cursor-pointer"}>
                  <span className="label-text">Female</span>
                  <input type="checkbox" className="checkbox border-violet-900 checkbox-primary" />
              </label>
          </div>
      </div>
    )
  }
  
  export default GenderCheckbox */