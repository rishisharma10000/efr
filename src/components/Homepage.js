import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../images/efr.png';
import PartnerCard from './PartnerCard';
import ReactPaginate from 'react-paginate';
import './homepage.scss'
import LoadingPage from './LoadingPage';
import ErrorPage from './ErrorPage';

const Homepage = () => {
    const [partners, setPartners] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [partnersPerPage] = useState(6);


    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const companyData = res.data.map(item => {
                    item.company.website = item.website
                    return item.company
                })
                return companyData
            }).then(res => {

                //only used multiple spread operators to easily replicate data for pagination purpose
                const adjustedPartners = [...res, ...res, ...res, ...res, ...res, ...res]
                setPartners(adjustedPartners);
                setLoading(false);
            })
            .catch(() =>
                setError(true))
    }, [])

    const handleClick = (data) => {
        setCurrentPage(data.selected + 1)
    }

    const lastPartner = currentPage * partnersPerPage;
    const firstPartner = lastPartner - partnersPerPage;
    const currentPartners = partners.slice(firstPartner, lastPartner);

    if (isLoading) {
        return <LoadingPage />
    } else if (hasError) {
        return <ErrorPage />
    } else {

        return (
            <div className="homepage__container">
                <div className="homepage__header">
                    <img src={logo} alt="Efr Logo" />
                </div>
                <div className="homepage__cardContainer">
                    {
                        currentPartners.map((partner, index) =>
                            <div className="homepage__cardOuter" key={index}>
                                {
                                    <PartnerCard
                                        partner={partner}
                                    />
                                }
                            </div>
                        )
                    }

                </div>
                <div className="homepage__pages">
                    <ReactPaginate
                        previousLabel={"← Previous"}
                        nextLabel={"Next →"}
                        pageCount={10}
                        pageRangeDisplayed={10}
                        onPageChange={handleClick}
                    />
                </div>
            </div>
        );
    }
}


export default Homepage;