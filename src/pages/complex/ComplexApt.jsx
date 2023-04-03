import { useState } from "react";

function ComplexApt() {
  const [sync, setSync] = useState(false);

  return (
    <main class="sidebar-expanded bg-slate-100 font-inter text-slate-600 antialiased">
      <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-8">
          {/* Title */}
          <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
            101 동
          </h1>
        </div>

        {/* Content */}
        <div className="mb-8 rounded-sm bg-white shadow-lg">
          <div className="flex flex-row md:-mr-px md:flex-row">
            {/* <SettingsSidebar /> */}
            <div className="grow">
              {/* Panel body */}
              <div className="p-6">
                {/* <h2 className="text-2xl text-slate-800 font-bold mb-5">Connected Apps</h2> */}

                {/* General */}
                {/* <div className="mb-6">
          <div className="mb-4 border-b border-slate-200">
            <ul className="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
              <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a className="text-indigo-500 whitespace-nowrap" href="#0">View All</a>
              </li>
              <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a className="text-slate-500 hover:text-slate-600 whitespace-nowrap" href="#0">Utility</a>
              </li>
              <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a className="text-slate-500 hover:text-slate-600 whitespace-nowrap" href="#0">Marketing</a>
              </li>
              <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <a className="text-slate-500 hover:text-slate-600 whitespace-nowrap" href="#0">Development</a>
              </li>
            </ul>
          </div>
        </div> */}

                {/* Trending Categories cards */}
                <section>
                  <header className="mb-6 flex">
                    <h3 className="flex-1 text-xl font-bold leading-snug text-slate-800">
                      101 동
                    </h3>
                    <button className="btn-sm self-end bg-indigo-500 text-white hover:bg-indigo-600">
                      동 추가
                    </button>
                  </header>
                  <div className="mb-2 grid grid-cols-6 gap-6 rounded-sm bg-slate-50 text-sm uppercase text-slate-400">
                    {/* ㅇㄴ */}
                    <div class="p-1"></div>
                    <div class="p-1">1호</div>
                    <div class="p-1">2호</div>
                    <div class="p-1">3호</div>
                    <div class="p-1">4호</div>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="mb-2 rounded-sm bg-slate-50 text-sm uppercase text-slate-400">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        3 층
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            102 호
                          </h3>
                        </header>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            103 호
                          </h3>
                        </header>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            104 호
                          </h3>
                        </header>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-6 gap-6">
                    <div className="mb-2 rounded-sm bg-slate-50 text-sm uppercase text-slate-400">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        2 층
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-6 gap-6">
                    <div className="mb-2 rounded-sm bg-slate-50 text-sm uppercase text-slate-400">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        1 층
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                    {/* Card 1 */}
                    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-md xl:col-span-1">
                      {/* Card content */}
                      <div className="flex h-fit flex-col p-3 text-center">
                        <header>
                          <h3 className="mb-1 text-lg font-semibold text-slate-800">
                            101 호
                          </h3>
                        </header>
                        <div className="text-sm">상세</div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Review & Pay */}
            <div>
                  <div className="no-scrollbar border-t border-slate-200 bg-slate-50 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] lg:w-[320px] lg:shrink-0 lg:overflow-y-auto lg:overflow-x-hidden lg:border-t-0 lg:border-l xl:w-[352px] 2xl:w-[calc(352px+80px)]">
                    <div className="py-8 px-4 lg:px-8 2xl:px-12">
                      <div className="mx-auto max-w-sm lg:max-w-none">
                        <h2 className="mb-6 text-2xl font-bold text-slate-800">
                          Review & Pay
                        </h2>
                        <div className="space-y-6">
                          {/* Order summary */}
                          <div>
                            <div className="mb-2 font-semibold text-slate-800">
                              Order Summary
                            </div>
                            <ul className="mb-4">
                              <li className="flex w-full justify-between border-b border-slate-200 py-3 text-sm">
                                <div>Subtotal</div>
                                <div className="font-medium text-slate-800">
                                  $205
                                </div>
                              </li>
                              <li className="flex w-full justify-between border-b border-slate-200 py-3 text-sm">
                                <div>Total due (including taxes)</div>
                                <div className="font-medium text-emerald-600">
                                  $253
                                </div>
                              </li>
                            </ul>
                          </div>

                          {/* Payment Details */}
                          <div>
                            <div className="mb-4 font-semibold text-slate-800">
                              Payment Details
                            </div>
                            <div className="space-y-4">
                              {/* Card Number */}
                              <div>
                                <label
                                  className="mb-1 block text-sm font-medium"
                                  htmlFor="card-nr"
                                >
                                  Card Number{" "}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="card-nr"
                                  className="form-input w-full"
                                  type="text"
                                  placeholder="1234 1234 1234 1234"
                                />
                              </div>
                              {/* Expiry and CVC */}
                              <div className="flex space-x-4">
                                <div className="flex-1">
                                  <label
                                    className="mb-1 block text-sm font-medium"
                                    htmlFor="card-expiry"
                                  >
                                    Expiry Date{" "}
                                    <span className="text-rose-500">*</span>
                                  </label>
                                  <input
                                    id="card-expiry"
                                    className="form-input w-full"
                                    type="text"
                                    placeholder="MM/YY"
                                  />
                                </div>
                                <div className="flex-1">
                                  <label
                                    className="mb-1 block text-sm font-medium"
                                    htmlFor="card-cvc"
                                  >
                                    CVC <span className="text-rose-500">*</span>
                                  </label>
                                  <input
                                    id="card-cvc"
                                    className="form-input w-full"
                                    type="text"
                                    placeholder="CVC"
                                  />
                                </div>
                              </div>
                              {/* Name on Card */}
                              <div>
                                <label
                                  className="mb-1 block text-sm font-medium"
                                  htmlFor="card-name"
                                >
                                  Name on Card{" "}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="card-name"
                                  className="form-input w-full"
                                  type="text"
                                  placeholder="John Doe"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Additional Details */}
                          <div>
                            <div className="mb-4 font-semibold text-slate-800">
                              Additional Details
                            </div>
                            <div className="space-y-4">
                              {/* Email */}
                              <div>
                                <label
                                  className="mb-1 block text-sm font-medium"
                                  htmlFor="card-email"
                                >
                                  Email <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="card-email"
                                  className="form-input w-full"
                                  type="email"
                                  placeholder="john@company.com"
                                />
                              </div>
                              {/* Country */}
                              <div>
                                <label
                                  className="mb-1 block text-sm font-medium"
                                  htmlFor="card-country"
                                >
                                  Country{" "}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <select
                                  id="card-country"
                                  className="form-select w-full"
                                >
                                  <option>Italy</option>
                                  <option>USA</option>
                                  <option>United Kingdom</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <div className="mb-4">
                              <button className="btn w-full bg-indigo-500 text-white hover:bg-indigo-600">
                                Pay $253.00
                              </button>
                            </div>
                            <div className="text-center text-xs italic text-slate-500">
                              You'll be charged $253, including $48 for VAT in
                              Italy
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ComplexApt;
