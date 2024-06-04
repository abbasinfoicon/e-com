import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const BlogDetails = () => {
    return (
        <>
            <Breadcrumb title="Blog Details" parent="Blog" parentLink="blog" />

            <section className="blog-detail-page blog-page section-b-space ratio2_3">
                <div className="container">
                    <div className='row'>
                        <div className='col-xl-9 col-lg-8 col-md-7'>
                            <div className="row">
                                <div className="col-sm-12 blog-detail">
                                    <img src="/assets/images/about/about-us.jpg" className="img-fluid" alt="" />
                                    <h3>Also the leap into electronic typesetting, remaining essentially unchanged.</h3>
                                    <ul className="post-social">
                                        <li>25 January 2018</li>
                                        <li>Posted By : Admin Admin</li>
                                        <li><i className="fa fa-heart"></i> 5 Hits</li>
                                        <li><i className="fa fa-comments"></i> 10 Comment</li>
                                    </ul>
                                    <p>Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis augue id, imperdiet
                                        fringilla dolor. Nulla sed nisl vel nisi cursus finibus. Vivamus ut augue nec justo viverra
                                        laoreet. Nunc efficitur, arcu ac cursus gravida, lorem elit commodo urna, id viverra libero
                                        tellus non ipsum. Fusce molestie ultrices nibh feugiat pretium. Donec pulvinar arcu metus, et
                                        dapibus odio condimentum id. Quisque malesuada mauris sit amet dui feugiat, ut pretium mauris
                                        luctus. Ut aliquam, tellus nec molestie condimentum, tellus arcu dignissim quam, a gravida nunc
                                        nulla vel magna. Sed pulvinar tortor et euismod blandit. Proin accumsan orci ac nunc fermentum
                                        vehicula.</p>
                                    <p>Cras quis neque urna. Pellentesque mollis, dui nec elementum elementum, ipsum quam suscipit
                                        ligula, sit amet lobortis dolor sem sed neque. Vivamus consequat est non sodales efficitur.
                                        Aliquam sodales eleifend sodales. Aliquam auctor ipsum quis nisl facilisis, at convallis mauris
                                        iaculis. Duis eleifend, magna ac convallis blandit, dui dui auctor leo, sed tincidunt nisi
                                        mauris ut nulla. Praesent porttitor dui ac turpis commodo porttitor. Integer ligula nisi,
                                        bibendum non sem at, porta condimentum dui.</p>
                                    <p>Proin id eleifend diam, euismod dictum nibh. Ut ullamcorper in purus at tempor. Nullam mattis
                                        risus nec velit semper lobortis. Donec accumsan ligula fermentum, ultricies massa eget, cursus
                                        leo. Suspendisse placerat elit et lacus aliquam, ut elementum leo aliquet. Integer ornare, ipsum
                                        eu lacinia viverra, lectus ipsum scelerisque nisl, nec iaculis leo elit id arcu. Aliquam id ante
                                        elit. Donec commodo purus eget lacus pharetra, et egestas metus blandit. Quisque pellentesque
                                        porta urna, sed dictum enim viverra a.</p>
                                </div>
                            </div>

                            <div className="row section-b-space blog-advance">
                                <div className="col-lg-6">
                                    <div><img src="/assets/images/blog/1.jpg" className="img-fluid bg-img" alt="" /></div>
                                </div>
                                <div className="col-lg-6">
                                    <div><img src="/assets/images/blog/2.jpg" className="img-fluid bg-img" alt="" /></div>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>Donec ut metus sit amet elit consectetur facilisis id vel turpis.</li>
                                        <li>Aenean in mi eu elit mollis tincidunt.</li>
                                        <li>Etiam blandit metus vitae purus lacinia ultricies.</li>
                                        <li>Nunc quis nulla sagittis, faucibus neque a, tempus metus.</li>
                                        <li>In scelerisque libero ut mi ornare, a porttitor neque pulvinar.</li>
                                        <li>Morbi molestie lacus blandit interdum sodales.</li>
                                        <li>Curabitur eleifend velit molestie eleifend interdum.</li>
                                        <li>Vestibulum fringilla tortor et lorem sagittis,</li>
                                        <li>In scelerisque libero ut mi ornare, a porttitor neque pulvinar.</li>
                                        <li>Morbi molestie lacus blandit interdum sodales.</li>
                                        <li>Curabitur eleifend velit molestie eleifend interdum.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <p>Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas consequat.
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc at
                                        urna dolor. Mauris odio nisi, rhoncus ac justo eget, lacinia iaculis lectus. Pellentesque id
                                        dapibus justo. Nunc venenatis non odio sed luctus. Etiam sit amet elit massa.</p>
                                    <p>Phasellus quis lorem eros. Aliquam non tincidunt nibh. Nulla quis interdum neque. Mauris volutpat
                                        neque eu nunc ornare ullamcorper. Sed neque velit, lobortis eget tellus in, pellentesque ornare
                                        nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                        Maecenas rutrum nisi non nibh egestas lacinia. Cras ut tellus sit amet lacus consequat dictum
                                        nec id sapien. Ut pellentesque ac ex ut elementum. Morbi mollis volutpat neque eu volutpat.</p>
                                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla
                                        bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper
                                        tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean
                                        suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu.
                                        Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec
                                        facilisis erat tempor quis. Vestibulum eu vestibulum ex. Maecenas luctus orci sed blandit
                                        fermentum. In vulputate eu metus a faucibus. Suspendisse feugiat condimentum congue.</p>
                                </div>
                            </div>

                            <div className="row section-b-space">
                                <div className="col-sm-12">
                                    <ul className="comment-section">
                                        <li>
                                            <div className="media"><img src="/assets/images/avtar.jpg" alt="Generic placeholder image" />
                                                <div className="media-body">
                                                    <h6>Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span></h6>
                                                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis
                                                        fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer
                                                        faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique
                                                        odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat
                                                        lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus
                                                        sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis
                                                        erat tempor quis. Vestibulum eu vestibulum ex.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media"><img src="/assets/images/2.jpg" alt="Generic placeholder image" />
                                                <div className="media-body">
                                                    <h6>Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span></h6>
                                                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis
                                                        fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer
                                                        faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique
                                                        odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat
                                                        lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus
                                                        sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis
                                                        erat tempor quis. Vestibulum eu vestibulum ex.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media"><img src="/assets/images/20.jpg" alt="Generic placeholder image" />
                                                <div className="media-body">
                                                    <h6>Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span></h6>
                                                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis
                                                        fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer
                                                        faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique
                                                        odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat
                                                        lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus
                                                        sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis
                                                        erat tempor quis. Vestibulum eu vestibulum ex.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row blog-contact">
                                <div className="col-sm-12">
                                    <h2>Leave Your Comment</h2>
                                    <form className="theme-form">
                                        <div className="form-row row">
                                            <div className="col-md-12">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="form-control" id="name" placeholder="Enter Your name"
                                                    required="" />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" className="form-control" id="email" placeholder="Email" required="" />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="exampleFormControlTextarea1">Comment</label>
                                                <textarea className="form-control" placeholder="Write Your Comment"
                                                    id="exampleFormControlTextarea1" rows="6"></textarea>
                                            </div>
                                            <div className="col-md-12">
                                                <button className="btn btn-solid" type="submit">Post Comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <div className="blog-sidebar">
                                <div className="theme-card">
                                    <h4>Recent Blog</h4>
                                    <ul className="recent-blog">
                                        <li>
                                            <div className="media"> <Link href="/blog/1"><img className="img-fluid"
                                                src="/assets/images/blog/1.jpg" alt="Generic placeholder image" /></Link>
                                                <div className="media-body align-self-center">
                                                    <h6>25 Dec 2018</h6>
                                                    <p>0 hits</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media"> <Link href="/blog/1"><img className="img-fluid"
                                                src="/assets/images/blog/2.jpg" alt="Generic placeholder image" /></Link>
                                                <div className="media-body align-self-center">
                                                    <h6>25 Dec 2018</h6>
                                                    <p>0 hits</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media"> <Link href="/blog/1"><img className="img-fluid"
                                                src="/assets/images/blog/3.jpg" alt="Generic placeholder image" /></Link>
                                                <div className="media-body align-self-center">
                                                    <h6>25 Dec 2018</h6>
                                                    <p>0 hits</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media"> <Link href="/blog/1"><img className="img-fluid"
                                                src="/assets/images/blog/4.jpg" alt="Generic placeholder image" /></Link>
                                                <div className="media-body align-self-center">
                                                    <h6>25 Dec 2018</h6>
                                                    <p>0 hits</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media"> <Link href="/blog/1"><img className="img-fluid"
                                                src="/assets/images/blog/5.jpg" alt="Generic placeholder image" /></Link>
                                                <div className="media-body align-self-center">
                                                    <h6>25 Dec 2018</h6>
                                                    <p>0 hits</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="theme-card">
                                    <h4>Popular Blog</h4>
                                    <ul className="popular-blog">
                                        <li>
                                            <div className="media">
                                                <div className="blog-date"><span>03 </span><span>may</span></div>
                                                <div className="media-body align-self-center">
                                                    <h6><Link href="/blog/1">Injected humour the like</Link></h6>
                                                    <p>0 hits</p>
                                                </div>
                                            </div>
                                            <p>it look like readable English. Many desktop publishing text.</p>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="blog-date"><span>03 </span><span>may</span></div>
                                                <div className="media-body align-self-center">
                                                    <h6><Link href="/blog/1">Injected humour the like</Link></h6>
                                                    <p>0 hits</p>
                                                </div>
                                            </div>
                                            <p>it look like readable English. Many desktop publishing text.</p>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="blog-date"><span>03 </span><span>may</span></div>
                                                <div className="media-body align-self-center">
                                                    <h6><Link href="/blog/1">Injected humour the like</Link></h6>
                                                    <p>0 hits</p>
                                                </div>
                                            </div>
                                            <p>it look like readable English. Many desktop publishing text.</p>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="blog-date"><span>03 </span><span>may</span></div>
                                                <div className="media-body align-self-center">
                                                    <h6><Link href="/blog/1">Injected humour the like</Link></h6>
                                                    <p>0 hits</p>
                                                </div>
                                            </div>
                                            <p>it look like readable English. Many desktop publishing text.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails