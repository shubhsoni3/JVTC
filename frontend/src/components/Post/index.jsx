// import { Icon } from '@iconify/react';
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Post({
//   title,
//   thumbUrl,
//   date,
//   btnText,
//   href,
//   socialShare,
//   variant,
// }) {
//   return (
//     <div className={`cs_post cs_style_1 ${variant}`}>
//       <Link to={href} className="cs_post_thumb cs_view_mouse">
//         <img src={thumbUrl} alt={title} />
//       </Link>
//       <div className="cs_post_info">
//         <div>
//           <div className="cs_post_meta">
//             <div className="cs_posted_by">{date}</div>
//             {socialShare && (
//               <div className="cs_post_social">
//                 <Link to="/" className="cs_center rounded-circle">
//                   <Icon icon="fa-brands:linkedin-in" />
//                 </Link>
//                 <Link to="/" className="cs_center rounded-circle">
//                   <Icon icon="fa-brands:facebook-f" />
//                 </Link>
//                 <Link to="/" className="cs_center rounded-circle">
//                   <Icon icon="fa-brands:twitter" />
//                 </Link>
//               </div>
//             )}
//           </div>
//           <h2 className="cs_post_title cs_semibold cs_fs_32">
//             <Link to={href}>{title}</Link>
//           </h2>
//         </div>
//         {btnText && (
//           <div className="cs_heading_color cs_medium">
//             <Link to={href} className="cs_post_btn">
//               {btnText}
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
// import SectionHeading from "../SectionHeading/SectionHeading";

const api = "AIzaSyA1LEhKB0wXn0kH6WAMVKgOIgxoKicLvp4";
const channelId = "UCwa9XKMRiM3xBR-GgzvY-7g";
const fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${api}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

const AttendLiveEvents = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const resJson = await response.json();
        console.log("API Response:", resJson);
        const result = resJson.items.map((doc) => ({
          ...doc,
          VideoLink: "https://www.youtube.com/embed/" + doc.id.videoId,
          publishedAt: doc.snippet.publishedAt,
          title: doc.snippet.title,
        }));
        setVideos(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    }
    return title.substring(0, maxLength) + "...";
  };

  const videosToShow = videos.slice(0, 3);

  return (
    <div className="container">
      <div className="row">
        {videosToShow.map((video, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="st-post st-style3">
              <div className="st-post-thumb st-link-hover-wrap st-zoom">
                <iframe
                  className="embed-responsive-item"
                  width="100%"
                  height="300px"
                  allowFullScreen
                  src={video.VideoLink}
                  title={`YouTube video player ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div
                className="st-post-title"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {truncateTitle(video.title, 30)}
              </div>
              <div
                className="st-post-date"
                style={{
                  color: "#666666",
                  fontWeight: "bold",
                  fontSize: "14px",
                  marginTop: "10px",
                }}
              >
                {formatDate(video.publishedAt)}
              </div>
              <div
                className="mb-5"
                style={{
                  color: "#666666",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Posted by : Dr.DrArchna Shrivastav
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PostWrapper = ({ data }) => {
  return (
    <section id="blog">
      <div className="st-height-b120 st-height-lg-b80" />
      {/* <SectionHeading
        title="Latest News"
        subTitle="Stay updated with our latest news: breakthroughs, events, and insights. <br /> Explore the forefront of innovation and stay informed."
      /> */}
      <div className="container">
        <div className="row">
          <AttendLiveEvents />
          <div className="st-height-b120 st-height-lg-b80" />
        </div>
      </div>
    </section>
  );
};

export default PostWrapper;
