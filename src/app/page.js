import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-600 dark:bg-black">
      <div className="md:hidden">
        <VerticalNavbar />
        <LogoBar/>
      </div>
      <div className="md:block hidden">
        <Navbar />
      </div>
      <HeroSection />
      <FilterBar
        onFilterChange={handleFilterChange}
        availableProperties={filteredProperties.length}
      />
      <div className="px-4 py-2 min-h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 min-[1400px]:grid-cols-3 gap-6">
          {paginatedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center items-center py-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="mx-2 text-black dark:text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <ReviewSection />
      <Fotter />
    </main>
  );
}
