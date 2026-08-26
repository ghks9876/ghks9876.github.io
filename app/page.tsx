import { Fragment } from "react";

type RecordItem = {
  authors?: string;
  title: string;
  detail: string;
  href?: string;
  linkLabel?: string;
  note?: string;
};

type RecordGroup = {
  label: string;
  items: RecordItem[];
};

const researchInterests = [
  "LEO satellite networks and space edge computing",
  "Joint communication, computation, and multi-hop routing",
  "Battery-aware network optimization and deep reinforcement learning",
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
        note: "Under review",
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
        note: "JCR Top 5.5%",
      },
      {
        authors: "Jeonghwan Kim; Jeongho Kwak",
        title:
          "DCOOL: Dynamic Computation Offloading and Resource Allocation for LEO Satellite-Assisted Edge Computing in a Ground-Space Integrated Framework",
        detail: "ICT Express, vol. 10, no. 6, pp. 1212–1219, December 2024.",
        href: "https://doi.org/10.1016/j.icte.2024.09.014",
        linkLabel: "DOI",
        note: "JCR Top 23%",
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
        note: "BK21+",
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
        note: "Technical Report",
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
      "저궤도 군집 위성 통합 온보드 프로세싱-멀티홉 라우팅 알고리즘 개발 및 성능 분석",
    agency: "ETRI",
    period: "July 2025 – November 2025",
  },
  {
    title:
      "6G 초공간 네트워크 연구센터: 초고속 이동체 지원을 위한 3D-NET 핵심 기술 개발",
    agency: "IITP",
    period: "April 2022 – December 2025",
  },
  {
    title: "다중 통신기술 네트워크 로드밸런싱 기술 개발",
    agency: "IITP",
    period: "Research participation: 2024",
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
      "IEEE Internet of Things Journal",
      "IEEE Transactions on Network Science and Engineering",
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
  "Python",
  "MATLAB",
  "Deep Reinforcement Learning",
  "Network Optimization & Simulation",
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

function RecordList({ items }: { items: RecordItem[] }) {
  return (
    <ol className="record-list">
      {items.map((item) => (
        <li key={`${item.title}-${item.detail}`}>
          {item.authors && <p className="record-authors">{highlightName(item.authors)}</p>}
          <h4>{item.title}</h4>
          <p className="record-detail">
            {item.detail}
            {item.note && <span className="record-note">{item.note}</span>}
          </p>
          {item.href && (
            <a className="record-link" href={item.href} target="_blank" rel="noreferrer">
              {item.linkLabel ?? "View record"} <span aria-hidden="true">↗</span>
            </a>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jeonghwan Kim, home">
          <span className="brand-mark">JK</span>
          <span>Jeonghwan Kim</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Satellite edge intelligence · Network optimization</p>
          <h1>
            Jeonghwan Kim
            <span>김정환</span>
          </h1>
          <p className="hero-role">
            Integrated M.S.-Ph.D. Student in Electrical Engineering &amp;
            Computer Science at DGIST
          </p>
          <div className="profile-links" aria-label="Research profiles">
            {profileLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="portrait-placeholder" aria-label="Jeonghwan Kim initials">
          <span>JK</span>
        </div>
      </section>

      <div className="page-shell">
        <section className="section-grid" id="about">
          <div className="section-heading">
            <p>01</p>
            <h2>About</h2>
          </div>
          <div className="section-body prose">
            <p>
              I am an Integrated M.S.-Ph.D. student at DGIST under the
              supervision of Prof. Jeongho Kwak (DGIST / Korea University) in
              the Intelligent Computing &amp; Networking Laboratory, after
              receiving my B.S. from DGIST in 2022.
            </p>
            <p>
              My research focuses on intelligent wireless and non-terrestrial
              networks, including joint communication, onboard computing, and
              routing, battery-aware resource management, and learning-based
              control. I also study network-compute load balancing for connected
              and autonomous vehicles.
            </p>
          </div>
        </section>

        <section className="section-grid" id="education">
          <div className="section-heading">
            <p>02</p>
            <h2>Education</h2>
          </div>
          <div className="timeline">
            <article>
              <p className="timeline-date">March 2022 – Present</p>
              <h3>Integrated M.S.-Ph.D. Program</h3>
              <p>Electrical Engineering &amp; Computer Science, DGIST</p>
              <p className="timeline-meta">
                Advisor: Prof. Jeongho Kwak (DGIST / Korea University)
              </p>
            </article>
            <article>
              <p className="timeline-date">March 2017 – February 2022</p>
              <h3>B.S.</h3>
              <p>Daegu Gyeongbuk Institute of Science &amp; Technology (DGIST)</p>
            </article>
          </div>
        </section>

        <section className="section-grid" id="research">
          <div className="section-heading">
            <p>03</p>
            <h2>Research Interests</h2>
          </div>
          <ol className="interest-list">
            {researchInterests.map((interest, index) => (
              <li key={interest}>
                <span>0{index + 1}</span>
                <p>{interest}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section-grid" id="honors">
          <div className="section-heading">
            <p>04</p>
            <h2>Honors</h2>
          </div>
          <div className="honor-card">
            <p className="eyebrow">Scholarship</p>
            <h3>Korea Government Full Scholarship</h3>
            <p>Eight consecutive undergraduate semesters.</p>
          </div>
        </section>

        <section className="section-grid section-records" id="publications">
          <div className="section-heading">
            <p>05</p>
            <h2>Publications</h2>
          </div>
          <div className="record-groups">
            {publicationGroups.map((group) => (
              <section className="record-group" key={group.label}>
                <h3>{group.label}</h3>
                <RecordList items={group.items} />
              </section>
            ))}
          </div>
        </section>

        <section className="section-grid section-records" id="patents">
          <div className="section-heading">
            <p>06</p>
            <h2>Patents &amp; Software</h2>
          </div>
          <div className="record-groups">
            {patentGroups.map((group) => (
              <section className="record-group" key={group.label}>
                <h3>{group.label}</h3>
                <RecordList items={group.items} />
              </section>
            ))}
            <section className="record-group">
              <h3>Software</h3>
              <RecordList items={softwareItems} />
            </section>
          </div>
        </section>

        <section className="section-grid" id="projects">
          <div className="section-heading">
            <p>07</p>
            <h2>Projects</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.title}>
                <div>
                  <span>{project.agency}</span>
                  <span>Researcher</span>
                </div>
                <h3 lang="ko">{project.title}</h3>
                <p>{project.period}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid" id="service">
          <div className="section-heading">
            <p>08</p>
            <h2>Professional Service</h2>
          </div>
          <div className="service-grid">
            {serviceGroups.map((group) => (
              <section key={group.label}>
                <p className="eyebrow">Reviewer · {group.label}</p>
                <ul>
                  {group.venues.map((venue) => (
                    <li key={venue}>{venue}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="section-grid" id="skills">
          <div className="section-heading">
            <p>09</p>
            <h2>Skills</h2>
          </div>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="contact-strip" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Research conversations are welcome.</h2>
            <address>
              No. 507B, Woojung Hall of Informatics, Korea University<br />
              145 Anam-ro, Seongbuk-gu, Seoul, South Korea
            </address>
          </div>
          <div className="contact-links">
            <a href="mailto:ghks9876@dgist.ac.kr">ghks9876@dgist.ac.kr</a>
            <a href="https://icnl.korea.ac.kr/" target="_blank" rel="noreferrer">
              Intelligent Computing &amp; Networking Laboratory ↗
            </a>
          </div>
        </section>
      </div>

      <footer>
        <p>© 2026 Jeonghwan Kim</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
