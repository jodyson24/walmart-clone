import React from 'react'
import Socials from './Socials'
function ProductItem(props) {
  const ip = `http://206.189.124.254:9000`;
  const { _id, image, name, category, price } = props.details;
  return (
    <div className="main-body product-item-page">
            <div className="container-fluid">
              <div className="row" key={_id}>
                <div className="col-lg-6">
                  <div className="details-img mt-2 pt-2">
                    <img src={ip + image} alt="img" />
                  </div>
                </div>
                <div className="col-lg-6 pt-3 mt-2">
                  <div className="socials d-flex justify-content-between mb-3 pb-3">
                    <div>
                      <p className="pp-cat">{category} </p>
                    </div>
                    <div className="product-width pl-5 w-50 ml-5">
                      <Socials />
                    </div>
                  </div>
                  <div className="product-name w-100 mb-3 pt-4">
                    {name}
                  </div>
                  <div className="model-number">
                    <div className="d-flex model">
                      <p className="pr-4">Model: UN65NU6900FXZA</p>
                      <p>Walmart # 570561143</p>
                    </div>
                    <div className="d-flex stars">
                      <p className="pr-3">stars</p>
                      <p className="pr-3">(4.2) <span className="underline">2775 ratings</span></p>
                      <p className="underline">Write a review</p>
                    </div>
                  </div>
                  <div className="price d-flex">
                    <h2 className="pr-3">${price}</h2>
                    <p><span className="strikethrough">$100</span></p>
                  </div>
                  <div className="add-on pl-2 pt-3 pb-2 mb-3">
                    <div className="d-flex mb-1">
                      <h3 className="pr-3 add-on-c-t">Add-on services</h3>
                      <p className="pr-3"> (0 Selected)</p>
                      <p className="underline">View Options</p>
                    </div>

                    <div className="d-flex">
                      <p className="pr-4">Protection Plans</p>
                      <p className="pr-4">Expert Help</p>
                    </div>
                  </div>
                  <div className="qty-cart mb-5 d-flex ">
                    <div className="pr-4 mr-3">
                      <label>Qty:</label>
                      <select value={props.quantity} className="qty-details"
                        name="quantity" id="quantity"
                        onChange={e => props.handleQtyChange(e)}>
                        <option defaultValue="1" >1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>
                    <div>
                      <button data-id={_id}
                        className="submit-btn add-btn form-btn"
                        onClick={e => props.addToCart(e)}
                      >Add to cart</button>
                    </div>
                  </div>
                  <div className="delivery-info">
                    <p className="pb-3">Delivery not available</p>
                    <p className="">Pickup not available</p>
                  </div>
                  <div className="pt-2 border-b">
                    <p className="underline">More delivery & pickup options</p>
                  </div>
                  <div className="further-info d-flex border-b pt-3 ">
                    <p className="mr-4">Sold & shipped by <span className="underline">VIPOULET</span></p>
                    <p className="mr-4">|</p>
                    <p className="underline">Return Policy</p>
                  </div>
                  <div className="add-to-wishlist border-b pt-3">
                    <ul className="d-flex">
                      <li className="underline mr-5">Add to list</li>
                      <li className="underline">Add to registry</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
    

      <div className="container-fluid pb-3 pt-3 mt-3 mb-3">
        <div className="row justify-content-even">
          <div className="col-lg-4 ">
            <div className="product-details-six-tiles">
              <p className="p-d-s-t-detail"> Not available</p>
              <h3 className="pt-title">Available</h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product-details-six-tiles">
              <p className="p-d-s-t-detail"> Not available</p>
              <h3 className="pt-title">Available</h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product-details-six-tiles">
              <p className="p-d-s-t-detail"> Not available</p>
              <h3 className="pt-title">Available</h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product-details-six-tiles">
              <p className="p-d-s-t-detail"> Not available</p>
              <h3 className="pt-title">Available</h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product-details-six-tiles">
              <p className="p-d-s-t-detail"> Not available</p>
              <h3 className="pt-title">Available</h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product-details-six-tiles">
              <p className="p-d-s-t-detail"> Not available</p>
              <h3 className="pt-title">Available</h3>
            </div>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center pt-4 mt-2 mb-3 pb-2">
          <button className="submit-btn w-10">See more product details</button>
        </div>
      </div>

      <div className="container-fluid buy-together border-r">
        <div className="row">
          <div className="col-lg-3">

          </div>
          <div className="col-lg-3">

          </div>
          <div className="col-lg-6">

          </div>
        </div>
      </div>


      <div className="container-fluid mb-5 pb-4">
        <div className="row">
          <div>
            <h4>About This Item</h4>
            <p className="f-14">We aim to show you accurate product information.
            Manufacturers, suppliers and others provide what you
            see here, and we have not verified it. See our disclaimer
            </p>
            <p className="f-14">The 4-Series 4K TCL Roku TV delivers stunning Ultra
            HD picture quality with four times the resolution of Full HD
            for enhanced clarity and detail, as well as the most streaming
            channels of any 4K Roku TV. High dynamic range (HDR) technology
            delivers bright and accurate colors for a lifelike viewing
            experience. In addition, your favorite HD shows, movies, and
            sporting events are upscaled to near Ultra HD resolution with
            4K Upscaling. The simple, intuitive Roku interface allows seamless
            access to over 500,000 streaming movies and TV episodes, your
            cable box, Blu-ray player, gaming console, and other
               devices without flipping through inputs or complicated menus.</p>

          </div>
          <div>
            <ul className="li-decor">
              <h3>Key Features</h3>
              <li>Lorem ipsum</li>
              <li>Lorem Ipsum continua</li>

              <h3>4k UHD Picture</h3>
              <li>PurColorTM</li>
              <li>Essential Contrast</li>
              <li>HDR</li>
              <li>4K UHD</li>
              <li>Game Mode</li>
              <li>Motion Rate 120</li>
              <li>Contrast Enhance</li>

              <h3>Design</h3>
              <li>Clean Cable Solution</li>
              <li>Slim Design</li>
              <li>Bezel Color: Glossy Black (75NU^? Charcoal Black)</li>
              <li>Stand Color: Charcoal Black(75NU^?Dark Gray)</li>
              <li>VESA MOunting Standard: 100mm x 100mm, 200mm x 100mm, 200mm x 200mm,
              300mm x 300mm, 400mm x 200mm, 400mm x 400mm, 600mm x 400mm
                 </li>

              <h3>Smart TV</h3>
              <li>Universal Browse</li>
              <li>Connect & Share</li>

              <h3>Connections</h3>
              <li>2 HDMI Connections</li>
              <li>1 USB Connectin</li>
              <li>82.11N built-in Wi-FI</li>
              <li>RS232 Control (requires adaptor) 2 Audio Output Port</li>

              <h3>Audio</h3>
              <li>Dolby Digital Plus</li>
              <li>20 Watt 2 Channel </li>

              <h3>Included Accessories</h3>
              <li>Standard Remote (T-1240A)</li>
              <li>Shipping Size(W x H x D):63" x 38.2" x 7"</li>

              <h3>Industry Certifications</h3>
              <li>CTA 4K Ultra HD Connected</li>

              <h3>Disclaimer</h3>
              <li>1HDMI?CEC (Consumer Electronics Control) facilitates
              convenient control functinos with compatible devices. 2Serial control USB adaptor
              procided by the participating dealers and distributors.
                 </li>
            </ul>

            <div className="">
              <h3>Warning</h3>
              <p>Warning: This product can expose you to chemicals, including lead, known to the state
              of Carlifornia to cause cancer, bit=rth defects, or other reproductive harm. For more information
                  go to wwwm.P65Warnings.ca.gov <a href="www.p65warnings.ca.gov">www.p65warnings.ca.gov</a>
              </p>
            </div>

            <div className="">
              <h3>Specifications</h3>
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Display Technology</td>
                    <td>LED</td>
                  </tr>
                  <tr>
                    <td>Display Technology</td>
                    <td>LED</td>
                  </tr>
                  <tr>
                    <td>Display Technology</td>
                    <td>LED</td>
                  </tr>
                  <tr>
                    <td>Display Technology</td>
                    <td>LED</td>
                  </tr>
                  <tr>
                    <td>Display Technology</td>
                    <td>LED</td>
                  </tr>
                  <tr>
                    <td>Display Technology</td>
                    <td>LED</td>
                  </tr>
                  <tr>
                    <td>Display Technology</td>
                    <td>LED</td>
                  </tr>
                  <tr>
                    <td>Display Technology</td>
                    <td>LED</td>
                  </tr>
                  <tr>
                    <td>Display Technology</td>
                    <td>LED</td>
                  </tr>
                  <tr>
                    <td>Display Technology</td>
                    <td>LED</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      <div className="border-r mb-4"></div>
      <div className="border-r mb-4"></div>
      <div className="border-r mb-4"></div>
      <div className="border-r mb-4"></div>
      <div className="border-r mb-5"></div>

    </div>
  )


}

export default ProductItem