    import React from 'react'
    
    export default function cuppan() {
      return (
        <div>
          <div class="container">
          <div class="table-responsive">
					<table class="table table-bordered">
						<thead class="table-primary">
							<tr>
								<th scope="col">Offer Detail</th>
								<th scope="col">Maximum booking value</th>
								<th scope="col">Applicable Card</th>
								<th scope="col">Coupon Code</th>
								<th scope="col">Validity</th>
							</tr>
						</thead>
						<tbody class="align-middle">
							<tr>
								<td class="h6 mb-0">Flat 25% instant discount for all users</td>
								<td class="h6 fw-normal mb-0">$3000</td>
								<td class="h6 fw-normal mb-0">Mbokiwik</td>
								<td>
									<div class="bg-light border border border-secondary border-dashed rounded-2 px-3 py-2">
										<h6 class="mb-0 fw-normal user-select-all">LOG125F</h6>
									</div>
								</td>
								<td class="h6 fw-normal mb-0">19 Sep</td>
							</tr>
						</tbody>
					</table>
				</div>
          </div>
        </div>
      )
    }
    