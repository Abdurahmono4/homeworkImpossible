import React from "react";

function Home() {
  return (
    <div className="flex flex-col  text-center  items-center ml-auto mr-auto">
      <h1 className="text mb-4">Add new Data </h1>
      <form action="" className="flex flex-col gap-5 ">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="input w-60 border-r-4"
          placeholder="Title"
        />
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="Email"
          className="input w-60"
        />
        <button type="Submit" className="btn btn-primary w-60">
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

export default Home;
