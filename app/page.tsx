import { Fragment } from "react";

type RecordItem = {
  authors?: string;
  title: string;
  detail: string;
  href?: string;
  linkLabel?: string;
  highlight?: string;
};

type RecordGroup = {
  label: string;
  items: RecordItem[];
};

const researchInterests = [
  "LEO satellite networks and space edge computing",
  "Joint communication, computation, and multi-hop routing",
  "Battery-lifetime-aware resource management and network optimization",
  "Network-compute load balancing for connected and autonomous vehicles",
];

const profileLinks = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=Hy1U4_EAAAAJ&hl=en",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0007-1215-2094",
  },
  {
    label: "ICNL Lab",
    href: "https://icnl.korea.ac.kr/",
  },
];

const publicationGroups: RecordGroup[] = [
  {
    label: "Manuscript",
    items: [
      {
        authors:
          "Jeonghwan Kim; Dongho Ham; Jinhyun So; Namseok Ko; Long Bao Le; Jeongho Kwak",
        title:
          "BLADE: Battery-Lifespan-Aware Joint Routing and In-Orbit Processing in Dynamic LEO Constellations",
        detail: "Manuscript submitted to an IEEE Transactions journal, 2026.",
      },
    ],
  },
  {
    label: "International Journals",
    items: [
      {
        authors:
          "Jeongho Kwak; Hoon Sung Chwa; Han-Shin Jo; Wonyul Kang; Jeonghwan Kim; Juho Song; Jeeyoo Kim; Seoungjae Lee; Taesik Nam; Wonwoo Seong; Ji-Woong Choi",
        title:
          "An Integrated Network-Computing Load Balancing Simulator for VEC-Assisted Autonomous Vehicles",
        detail: "IEEE Communications Magazine, vol. 63, no. 6, pp. 146–153, June 2025.",
        href: "https://doi.org/10.1109/MCOM.003.2400432",
        linkLabel: "DOI",
        highlight: "(IF: 8.3, JCR Top 5.5% in Telecommunications).",
      },
      {
        authors: "Jeonghwan Kim; Jeongho Kwak",
        title:
          "DCOOL: Dynamic Computation Offloading and Resource Allocation for LEO Satellite-Assisted Edge Computing in a Ground-Space Integrated Framework",
        detail: "ICT Express, vol. 10, no. 6, pp. 1212–1219, December 2024.",
        href: "https://doi.org/10.1016/j.icte.2024.09.014",
        linkLabel: "DOI",
        highlight:
          "(2024 JCR: IF 4.2, Top 23% in Computer Science, Information Systems).",
      },
    ],
  },
  {
    label: "Domestic Journal",
    items: [
      {
        authors: "김정환; 곽정호",
        title:
          "저궤도 위성 네트워크에서의 엣지 컴퓨팅을 위한 동적 코드 오프로딩 및 CPU 클럭 스케일링",
        detail: "한국통신학회논문지, vol. 49, no. 4, pp. 547–555, 2024.",
        href: "https://doi.org/10.7840/kics.2024.49.4.547",
        linkLabel: "DOI",
      },
    ],
  },
  {
    label: "International Conferences",
    items: [
      {
        authors: "Eunsu Kim; Pyeongjun Choi; Jeonghwan Kim; Jeongho Kwak",
        title:
          "Interchangeable CPU-GPU DVFS for Encoding vs. Inference in LEO Satellite Onboard Processing",
        detail: "IEEE/IFIP NOMS, Rome, Italy, pp. 1–10, May 2026.",
        highlight: "(BK21+ Outstanding International Conference).",
      },
      {
        authors:
          "Jeonghwan Kim; Juho Song; Hoon Sung Chwa; Ji-Woong Choi; Jeongho Kwak",
        title:
          "Dynamic Load Balancing Framework for Compute-Network Resource Integration in MEC-Assisted Autonomous Vehicles",
        detail: "IEEE ICUFN, pp. 6–8, 2025.",
        href: "https://doi.org/10.1109/ICUFN65838.2025.11170057",
        linkLabel: "DOI",
      },
      {
        authors: "Jeonghwan Kim; Jeongho Kwak",
        title:
          "SatAware: Real-Time Hardware-Aware Scheduling for Robust LEO Satellite Networks",
        detail: "ICSANE / IEICE Technical Report, vol. 125, no. 245, pp. 91–93, 2025.",
      },
      {
        authors:
          "Seoungjae Lee; Taesik Nam; Kiwoong Park; Donghyeok Shin; Wonyul Kang; Yongjae Jang; Jeonghwan Kim; Ji-Woong Choi; Jeongho Kwak; Han-Shin Jo",
        title:
          "Autonomous Traffic and Communication Integrated Simulator for V2X Performance Evaluation",
        detail: "IEEE VTC2024-Fall, pp. 1–5, 2024.",
        href: "https://doi.org/10.1109/VTC2024-Fall63153.2024.10757513",
        linkLabel: "DOI",
      },
      {
        authors: "Jeonghwan Kim; Eunsu Kim; Jeongho Kwak",
        title:
          "Edge Computing on the Sky: Dynamic Code Offloading Using Realistic Satellite Onboard Processors",
        detail: "IEEE ICTC, pp. 1818–1819, 2024.",
        href: "https://doi.org/10.1109/ICTC62082.2024.10827372",
        linkLabel: "DOI",
      },
      {
        authors: "Pyeongjun Choi; Jeonghwan Kim; Jeongho Kwak",
        title:
          "Joint Task Offloading and Resource Allocation for Integrated V2V and V2I Communication",
        detail: "IEEE ICTC, pp. 609–610, 2024.",
        href: "https://doi.org/10.1109/ICTC62082.2024.10827653",
        linkLabel: "DOI",
      },
      {
        authors: "Jeonghwan Kim; Taewoo Lee; Jeongho Kwak",
        title:
          "Dynamic Optimization Framework for Multi-Hop Code Offloading in LEO Satellite Edge Computing",
        detail: "IEEE ICTC, pp. 318–320, 2023.",
        href: "https://doi.org/10.1109/ICTC58733.2023.10392568",
        linkLabel: "DOI",
      },
      {
        authors: "Jeonghwan Kim; Jeongho Kwak",
        title:
          "Modeling of Computation Offloading for LEO Satellite-Assisted Federated Learning on Ground-Space Integrated Architecture",
        detail: "IEEE ICTC, pp. 134–138, 2023.",
        href: "https://doi.org/10.1109/ICTC58733.2023.10392851",
        linkLabel: "DOI",
      },
      {
        authors: "Jeonghwan Kim; Dongho Ham; Taeyeoun Kim; Jeongho Kwak",
        title: "Survey on Satellite-Mobile Code Offloading",
        detail: "IEEE ICTC, pp. 921–923, 2022.",
        href: "https://doi.org/10.1109/ICTC55196.2022.9952857",
        linkLabel: "DOI",
      },
    ],
  },
  {
    label: "Domestic Conferences",
    items: [
      {
        authors: "김정환; 곽정호",
        title:
          "LEO 클러스터의 실시간 하드웨어 상태를 반영한 태스크 스케줄링 및 자원 최적화",
        detail: "한국통신학회 동계종합학술발표회, pp. 618–619, 2025.",
      },
      {
        authors:
          "김정환; 이승재; 성원우; 조한신; 강원율; 곽정호; 최지웅",
        title:
          "레벨 4 자율주행을 위한 컴퓨팅/네트워킹 부하의 로드밸런싱 알고리즘 및 VTD-MATLAB 통합 시뮬레이터를 통한 분석",
        detail: "한국통신학회 하계종합학술발표회, 2024.",
      },
      {
        authors: "김정환; 이태우; 곽정호",
        title: "저궤도 위성환경 멀티 홉 코드 오프로딩에서의 동적 최적화",
        detail: "JCCI, 2023.",
      },
      {
        authors: "김정환; 함동호; 김태연; 곽정호",
        title:
          "저궤도 위성-지상 통합 네트워크 아키텍처에서의 엣지 컴퓨팅을 위한 동적 오프로딩 최적화",
        detail: "한국통신학회 동계종합학술발표회, pp. 1255–1256, 2023.",
      },
      {
        authors: "김정환; 함동호; 김태연; 곽정호",
        title:
          "저궤도 위성-모바일 엣지 컴퓨팅 모델을 위한 동적 최적화 알고리즘",
        detail: "한국통신학회 추계종합학술발표회, 2022.",
      },
    ],
  },
];

const patentGroups: RecordGroup[] = [
  {
    label: "Overseas Patent",
    items: [
      {
        authors: "Jeong Hwan Kim; Jeong Ho Kwak; Tae Yeoun Kim; Dong Ho Ham",
        title:
          "Method and Apparatus for Performing Task Offloading Between Terminal and Satellite in MEC Network",
        detail:
          "U.S. Patent Application Publication US 2024/0073740 A1, Application No. 18/230,216, February 29, 2024.",
        href: "https://patents.google.com/patent/US20240073740A1/en",
        linkLabel: "Patent record",
      },
    ],
  },
  {
    label: "Domestic Patents",
    items: [
      {
        authors: "김정환; 곽정호; 김태연; 함동호",
        title:
          "MEC 네트워크에서 단말과 위성 간의 태스크 오프로딩을 수행하는 방법 및 장치",
        detail: "대한민국 등록특허 10-2484004, 2022.",
        href: "https://patents.google.com/patent/KR102484004B1/en",
        linkLabel: "Patent record",
      },
      {
        authors: "김정환; 곽정호; 김태연; 함동호",
        title:
          "MEC 네트워크에서 단말과 위성 간의 태스크 오프로딩을 수행하는 방법 및 장치",
        detail: "대한민국 특허출원 10-2022-0105395, 2022.",
      },
      {
        authors: "김정환; 곽정호; 이태우",
        title: "멀티 홉 저궤도 위성 엣지 컴퓨팅 시스템의 제어 방법 및 그 장치",
        detail: "대한민국 특허출원 10-2023-0042451, 2023.",
      },
      {
        authors:
          "최지웅; 곽정호; 김정환; 김지유; 강원율; 조한신; 남태식; 성원우; 이승재",
        title: "자율주행 시뮬레이션 장치 및 방법",
        detail: "대한민국 특허출원 10-2024-0129141, 2024.",
      },
    ],
  },
];

const softwareItems: RecordItem[] = [
  {
    authors: "Jeonghwan Kim (development contributor)",
    title: "동적 위성-모바일 코드 오프로딩 알고리즘",
    detail:
      "Software registration C-2023-005166, Korea Copyright Commission, 2023. Registered author and rightsholder: DGIST.",
  },
  {
    authors: "Jeonghwan Kim (development contributor)",
    title:
      "다중 사용자를 위한 저궤도 위성 네트워크 엣지 컴퓨팅 환경에서의 동적 최적화 알고리즘",
    detail:
      "Software registration C-2023-063194, Korea Copyright Commission, 2023. Registered author and rightsholder: DGIST.",
  },
];

const projects = [
  {
    title:
      "저궤도 군집 위성 환경에서 추론-라우팅 통합 및 배터리 상태 인지형 최적 자원 관리 알고리즘 개발 및 성능 분석",
    agency: "ETRI",
    period: "May 2026 – November 2026",
  },
  {
    title:
      "6G 초공간 네트워크 연구센터: 초고속 이동체 지원을 위한 3D-NET 핵심 기술 개발",
    agency: "IITP",
    period: "April 2022 – December 2025",
  },
  {
    title:
      "저궤도 군집 위성 통합 온보드 프로세싱-멀티홉 라우팅 알고리즘 개발 및 성능 분석",
    agency: "ETRI",
    period: "July 2025 – November 2025",
  },
  {
    title: "다중 통신기술 네트워크 로드밸런싱 기술 개발",
    agency: "IITP",
    period: "April 2022 – December 2024 (participated in 2024)",
  },
  {
    title:
      "SICAS (Satellite Information Convergence Application Service Research Center): 위성정보 융합 서비스 ICT 연구센터 (ITRC)",
    agency: "IITP",
    period: "March 2022 – December 2023",
  },
];

const serviceGroups = [
  {
    label: "Journals",
    venues: [
      "IEEE Internet of Things Journal (IoTJ)",
      "IEEE Transactions on Network Science and Engineering (TNSE)",
      "The Journal of Korean Institute of Communications and Information Sciences (J-KICS)",
    ],
  },
  {
    label: "Conferences",
    venues: [
      "IEEE Global Communications Conference (GLOBECOM)",
      "IEEE International Conference on Mobile Ad Hoc and Smart Systems (MASS)",
    ],
  },
];

const skills = [
  "Programming & Simulation: Python, MATLAB, TLE-based LEO and V2X simulation",
  "Network Optimization: Communication–computation–routing, queue and battery awareness",
  "Machine Learning: Deep reinforcement learning for network control",
];

function highlightName(text: string) {
  const names = new Set(["Jeonghwan Kim", "Jeong Hwan Kim", "김정환"]);
  return text
    .split(/(Jeonghwan Kim|Jeong Hwan Kim|김정환)/g)
    .map((part, index) =>
      names.has(part) ? (
        <strong key={`${part}-${index}`}>{part}</strong>
      ) : (
        <Fragment key={`${part}-${index}`}>{part}</Fragment>
      ),
    );
}

function formatAuthors(text: string) {
  const authors = text
    .split(";")
    .map((author) => author.trim())
    .filter(Boolean);

  return authors.map((author, index) => {
    let separator = "";

    if (index > 0) {
      separator =
        authors.length === 2
          ? " and "
          : index === authors.length - 1
            ? ", and "
            : ", ";
    }

    return (
      <Fragment key={`${author}-${index}`}>
        {separator}
        {highlightName(author)}
      </Fragment>
    );
  });
}

function RecordList({ items }: { items: RecordItem[] }) {
  return (
    <ol className="pub-list">
      {items.map((item) => (
        <li key={`${item.title}-${item.detail}`}>
          {item.authors && <>{formatAuthors(item.authors)}, </>}
          &ldquo;{item.title},&rdquo; {item.detail}
          {item.highlight && (
            <>
              {" "}
              <span className="venue-accent">{item.highlight}</span>
            </>
          )}
          {item.href && (
            <>
              {" "}
              <a href={item.href} target="_blank" rel="noreferrer">
                [{item.linkLabel ?? "View record"}]
              </a>
            </>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  return (
    <div id="page-wrapper">
      <section id="header">
        <h1>
          <a href="#page-wrapper">Jeonghwan Kim</a>
        </h1>
      </section>

      <section id="main">
        <div className="container">
          <article className="box post">
            <header>
              <h2>Jeonghwan Kim</h2>
              <p>
                <b>
                  Integrated M.S. &amp; Ph.D. Student, DGIST / ICNL, Korea
                  University
                </b>
              </p>
            </header>

            {/* Preserve the reference template's plain profile image element. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="profile-photo"
              src="/images/profile-250402.png"
              alt="Portrait of Jeonghwan Kim"
            />

            <ul className="contact-list">
              <li>
                Email:{" "}
                <a href="mailto:ghks9876@dgist.ac.kr">ghks9876@dgist.ac.kr</a>
              </li>
              <li>
                {profileLinks.map((link, index) => (
                  <Fragment key={link.label}>
                    {index > 0 && <b> | </b>}
                    <a href={link.href} target="_blank" rel="noreferrer">
                      [{link.label}]
                    </a>
                  </Fragment>
                ))}
              </li>
              <li>
                No. 507B, Woojung Hall of Informatics, Korea University, 145
                Anam-ro, Seongbuk-gu, Seoul, South Korea
              </li>
            </ul>

            <p id="about">
              Jeonghwan Kim is an Integrated M.S. &amp; Ph.D. student at DGIST,
              advised by Prof. Jeongho Kwak (DGIST / Korea University) in the
              Intelligent Computing &amp; Networking Laboratory. His research
              focuses on intelligent LEO satellite networks and onboard edge
              computing, with an emphasis on joint communication, computation,
              and routing optimization for battery-aware resource management
              and connected autonomous vehicles.
            </p>

            <section id="education">
              <header>
                <h3>Education</h3>
              </header>
              <ul className="item-list">
                <li>
                  Integrated M.S. &amp; Ph.D. Program, Electrical Engineering
                  &amp; Computer Science, DGIST. Advisor: Prof. Jeongho Kwak
                  (DGIST / Korea University). March 2022 &ndash; Present.
                </li>
                <li>
                  B.S., Daegu Gyeongbuk Institute of Science &amp; Technology
                  (DGIST). March 2017 &ndash; February 2022.
                </li>
              </ul>
            </section>

            <section id="research">
              <header>
                <h3>Research Interests</h3>
              </header>
              <ul className="item-list">
                {researchInterests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </section>

            <section id="honors">
              <header>
                <h3>Honors</h3>
              </header>
              <ul className="item-list">
                <li>
                  Korea Government Full Scholarship (8 consecutive
                  undergraduate semesters).
                </li>
              </ul>
            </section>

            <section id="publications">
              <header>
                <h3>Publications</h3>
              </header>

              {publicationGroups.map((group) => (
                <Fragment key={group.label}>
                  <p className="subhead">{group.label}</p>
                  <RecordList items={group.items} />
                </Fragment>
              ))}

              {patentGroups.map((group) => (
                <Fragment key={group.label}>
                  <p className="subhead">{group.label}</p>
                  <RecordList items={group.items} />
                </Fragment>
              ))}

              <p className="subhead">Software Registration</p>
              <ul className="item-list">
                {softwareItems.map((item) => (
                  <li key={`${item.title}-${item.detail}`}>
                    {item.authors && <>{highlightName(item.authors)}, </>}
                    &ldquo;{item.title},&rdquo; {item.detail}
                  </li>
                ))}
              </ul>
            </section>

            <section id="projects">
              <header>
                <h3>Projects</h3>
              </header>
              <ul className="item-list">
                {projects.map((project) => (
                  <li key={project.title} lang="ko">
                    {project.title}, {project.agency}, Researcher, {project.period}.
                  </li>
                ))}
              </ul>
            </section>

            <section id="service">
              <header>
                <h3>Professional Service</h3>
              </header>
              <ul className="item-list">
                {serviceGroups.map((group) => (
                  <li key={group.label}>
                    {group.label === "Journals"
                      ? "Journal reviewer"
                      : "Conference reviewer"}
                    : {group.venues.join("; ")}.
                  </li>
                ))}
              </ul>
            </section>

            <section id="skills">
              <header>
                <h3>Skills</h3>
              </header>
              <ul className="item-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>

            <section id="contact">
              <header>
                <h3>Contact</h3>
              </header>
              <ul className="item-list">
                <li>
                  Email:{" "}
                  <a href="mailto:ghks9876@dgist.ac.kr">
                    ghks9876@dgist.ac.kr
                  </a>
                </li>
                <li>
                  Office: No. 507B, Woojung Hall of Informatics, Korea University
                </li>
                <li>
                  {profileLinks.map((link, index) => (
                    <Fragment key={link.label}>
                      {index > 0 && <> &middot; </>}
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </Fragment>
                  ))}
                </li>
              </ul>
            </section>
          </article>
        </div>
      </section>

      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="copyright">
                <ul className="links">
                  <li>&copy; 2026 Jeonghwan Kim. All rights reserved.</li>
                  <li>
                    Design: <a href="https://html5up.net">HTML5 UP</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
