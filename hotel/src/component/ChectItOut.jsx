
// import React from 'react'

// export default function ChectItOut() {
//   return (
//     <div>
//       <div class="container">
//    <div className="col-xl-10 position-relative mt-n3 mt-xl-n9">
//   {/* Title */}
//   <h6 className="d-none d-xl-block mb-3">Check Availability</h6>
//   {/* Booking from START */}
//   <form className="card shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4">
//     <div className="row g-4 align-items-center">
//       {/* Location */}
//       <div className="col-lg-4">
//         <div className="form-control-border form-control-transparent form-fs-md d-flex">
//           {/* Icon */}
//           <i className="bi bi-geo-alt fs-3 me-2 mt-2" />
//           {/* Select input */}
//           <div className="flex-grow-1">
//             <label className="form-label">Location</label>
//             <div className="choices" data-type="select-one" tabIndex={0} role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-select js-choice choices__input" data-search-enabled="true" hidden tabIndex={-1} data-choice="active"><option value data-custom-properties="[object Object]">Select location</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__placeholder choices__item--selectable" data-item data-id={1} data-value data-custom-properties="[object Object]" aria-selected="true">Select location</div></div></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><input type="search" name="search_terms" className="choices__input choices__input--cloned" autoComplete="off" autoCapitalize="off" spellCheck="false" role="textbox" aria-autocomplete="list" aria-label="Select location" placeholder /><div className="choices__list" role="listbox"><div id="choices--gp0r-item-choice-1" className="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice data-id={1} data-value data-select-text="Press to select" data-choice-selectable aria-selected="true">Select location</div><div id="choices--gp0r-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice data-id={2} data-value="San Jacinto, USA" data-select-text="Press to select" data-choice-selectable>San Jacinto, USA</div><div id="choices--gp0r-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice data-id={3} data-value="North Dakota, Canada" data-select-text="Press to select" data-choice-selectable>North Dakota, Canada</div><div id="choices--gp0r-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice data-id={4} data-value="West Virginia, Paris" data-select-text="Press to select" data-choice-selectable>West Virginia, Paris</div></div></div></div>
//           </div>
//         </div>
//       </div>
//       {/* Check in */}
//       <div className="col-lg-4">
//         <div className="d-flex">
//           {/* Icon */}
//           <i className="bi bi-calendar fs-3 me-2 mt-2" />
//           {/* Date input */}
//           <div className="form-control-border form-control-transparent form-fs-md">
//             <label className="form-label">Check in - out</label>
//             <input type="text" className="form-control flatpickr flatpickr-input" data-mode="range" placeholder="Select date" defaultValue="19 Sep to 28 Sep" readOnly="readonly" />
//           </div>
//         </div>
//       </div>
//       {/* Guest */}
//       <div className="col-lg-4">
//         <div className="form-control-border form-control-transparent form-fs-md d-flex">
//           {/* Icon */}
//           <i className="bi bi-person fs-3 me-2 mt-2" />
//           {/* Dropdown input */}
//           <div className="w-100">
//             <label className="form-label">Guests &amp; rooms</label>
//             <div className="dropdown guest-selector me-2">
//               <input type="text" className="form-guest-selector form-control selection-result" defaultValue="2 Guests 1 Room" data-bs-auto-close="outside" data-bs-toggle="dropdown" />
//               {/* dropdown items */}
//               <ul className="dropdown-menu guest-selector-dropdown">
//                 {/* Adult */}
//                 <li className="d-flex justify-content-between">
//                   <div>
//                     <h6 className="mb-0">Adults</h6>
//                     <small>Ages 13 or above</small>
//                   </div>
//                   <div className="hstack gap-1 align-items-center">
//                     <button type="button" className="btn btn-link adult-remove p-0 mb-0"><i className="bi bi-dash-circle fs-5 fa-fw" /></button>
//                     <h6 className="guest-selector-count mb-0 adults">2</h6>
//                     <button type="button" className="btn btn-link adult-add p-0 mb-0"><i className="bi bi-plus-circle fs-5 fa-fw" /></button>
//                   </div>
//                 </li>
//                 {/* Divider */}
//                 <li className="dropdown-divider" />
//                 {/* Child */}
//                 <li className="d-flex justify-content-between">
//                   <div>
//                     <h6 className="mb-0">Child</h6>
//                     <small>Ages 13 below</small>
//                   </div>
//                   <div className="hstack gap-1 align-items-center">
//                     <button type="button" className="btn btn-link child-remove p-0 mb-0"><i className="bi bi-dash-circle fs-5 fa-fw" /></button>
//                     <h6 className="guest-selector-count mb-0 child">0</h6>
//                     <button type="button" className="btn btn-link child-add p-0 mb-0"><i className="bi bi-plus-circle fs-5 fa-fw" /></button>
//                   </div>
//                 </li>
//                 {/* Divider */}
//                 <li className="dropdown-divider" />
//                 {/* Rooms */}
//                 <li className="d-flex justify-content-between">
//                   <div>
//                     <h6 className="mb-0">Rooms</h6>
//                     <small>Max room 8</small>
//                   </div>
//                   <div className="hstack gap-1 align-items-center">
//                     <button type="button" className="btn btn-link room-remove p-0 mb-0"><i className="bi bi-dash-circle fs-5 fa-fw" /></button>
//                     <h6 className="guest-selector-count mb-0 rooms">1</h6>
//                     <button type="button" className="btn btn-link room-add p-0 mb-0"><i className="bi bi-plus-circle fs-5 fa-fw" /></button>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Button */}
//     <div className="btn-position-md-middle">
//       <a className="icon-lg btn btn-round btn-primary mb-0" href="#"><i className="bi bi-search fa-fw" /></a>
//     </div>
//   </form>
//   {/* Booking from END */}
// </div>

//       </div>
//     </div>
//   )
// }

import React from 'react'

export default function ChectItOut() {
  return (
    <div>
      
    </div>
  )
}

