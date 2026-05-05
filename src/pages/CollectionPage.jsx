import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const clearAllCollection = () => {
    dispatch(clearCollection());
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {collection.length > 0 ? (
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Your Collection</h2>
          <button
            onClick={() => {
              clearAllCollection();
            }}
            className="w-fit rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 transition hover:bg-rose-400 active:scale-95"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-16 text-center shadow-[0_12px_40px_rgba(2,6,23,0.35)]">
          <h2 className="text-4xl font-semibold tracking-tight text-white">Collection is Empty</h2>
          <p className="mt-3 text-slate-400">Save a few items from the search tab to build your collection.</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {collection.map((item, idx) => {
          return <CollectionCard key={item.id || idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
