import Link from 'next/link';

type IconName =
  | 'activity'
  | 'arrow'
  | 'baby'
  | 'brain'
  | 'check'
  | 'heart'
  | 'language'
  | 'menu'
  | 'scale'
  | 'sparkles'
  | 'stethoscope'
  | 'users'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    activity: (
      <>
        <path d='M3 12h4l2.4-7 4.2 14 2.4-7h5' />
      </>
    ),
    arrow: (
      <>
        <path d='M5 12h14' />
        <path d='m13 6 6 6-6 6' />
      </>
    ),
    baby: (
      <>
        <circle cx='12' cy='8' r='5' />
        <path d='M8 8h.01M16 8h.01M10 11.5c1.2.7 2.8.7 4 0M5 21a7 7 0 0 1 14 0' />
      </>
    ),
    brain: (
      <>
        <path d='M9.5 4.5A3 3 0 0 0 4 6a3 3 0 0 0 1 5.8V15a3 3 0 0 0 4.5 2.6V4.5ZM14.5 4.5A3 3 0 0 1 20 6a3 3 0 0 1-1 5.8V15a3 3 0 0 1-4.5 2.6V4.5Z' />
        <path d='M9.5 8H7m7.5 2H17M9.5 14H7m7.5 2H17' />
      </>
    ),
    check: <path d='m5 12 4 4L19 6' />,
    heart: (
      <>
        <path d='M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z' />
        <path d='M3.8 12h4l1.4-3 2.5 6 1.6-3H20' />
      </>
    ),
    language: (
      <>
        <path d='m5 8 6 8m-7 0 6-8m-5-3h6M14 19l4-10 4 10m-6-4h4' />
      </>
    ),
    menu: (
      <>
        <path d='M4 7h16M4 12h16M4 17h16' />
      </>
    ),
    scale: (
      <>
        <path d='M12 3v18M5 7h14M5 7l-3 6h6L5 7Zm14 0-3 6h6l-3-6ZM8 21h8' />
      </>
    ),
    sparkles: (
      <>
        <path d='m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z' />
        <path d='m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z' />
      </>
    ),
    stethoscope: (
      <>
        <path d='M6 3v5a4 4 0 0 0 8 0V3M4 3h4m4 0h4M10 16a4 4 0 0 0 8 0v-1' />
        <circle cx='18' cy='12' r='2' />
      </>
    ),
    users: (
      <>
        <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
        <circle cx='9' cy='7' r='4' />
        <path d='M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8' />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.9'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      {paths[name]}
    </svg>
  )
}

function Logo() {
  return (
    <Link href='/' className='logo' aria-label='Cortex Saúde, início'>
      <span className='logo-mark'>
        <Icon name='brain' size={25} />
      </span>
      <span className='logo-copy'>
        <strong>
          Cortex<span>Saúde</span>
        </strong>
        <small>Conhecimento que aprova</small>
      </span>
    </Link>
  )
}

const subjects: {
  title: string
  description: string
  icon: IconName
  count: string
}[] = [
  {
    title: 'Fisioterapia',
    description: 'Ortopedia, neurologia, respiratória, cardio e UTI.',
    icon: 'activity',
    count: '12.480 questões',
  },
  {
    title: 'Enfermagem',
    description: 'Assistência, procedimentos e legislação profissional.',
    icon: 'heart',
    count: '18.240 questões',
  },
  {
    title: 'Medicina',
    description: 'Clínica, prevenção, diagnóstico e saúde coletiva.',
    icon: 'stethoscope',
    count: '9.830 questões',
  },
  {
    title: 'Saúde da criança',
    description: 'Pediatria, desenvolvimento e atenção integral.',
    icon: 'baby',
    count: '4.120 questões',
  },
  {
    title: 'Sistema Único de Saúde',
    description: 'Princípios, legislação, políticas e organização.',
    icon: 'users',
    count: '8.760 questões',
  },
  {
    title: 'Português',
    description: 'Interpretação, gramática, coesão e redação oficial.',
    icon: 'language',
    count: '6.540 questões',
  },
  {
    title: 'Legislação',
    description: 'Normas, ética, serviço público e legislação sanitária.',
    icon: 'scale',
    count: '5.280 questões',
  },
  {
    title: 'Conhecimentos gerais',
    description: 'Conteúdos complementares das principais bancas.',
    icon: 'brain',
    count: '3.950 questões',
  },
]

function Header() {
  return (
    <header className='header'>
      <div className='container nav-wrap'>
        <Logo />
        <nav className='desktop-nav' aria-label='Navegação principal'>
          <Link href='#questoes'>Questões</Link>
          <Link href='#simulados'>Simulados</Link>
          <Link href='#areas'>Áreas</Link>
          <Link href='#como-funciona'>Como funciona</Link>
        </nav>
        <div className='desktop-actions'>
          <Link className='text-button' href='#entrar'>
            Entrar
          </Link>
          <Link className='button button-sm' href='#cadastro'>
            Começar agora
          </Link>
        </div>
        <details className='mobile-menu'>
          <summary aria-label='Abrir menu'>
            <Icon name='menu' />
          </summary>
          <nav>
            <Link href='#questoes'>Questões</Link>
            <Link href='#simulados'>Simulados</Link>
            <Link href='#areas'>Áreas</Link>
            <Link href='#como-funciona'>Como funciona</Link>
            <Link href='#entrar'>Entrar</Link>
            <Link className='button' href='#cadastro'>
              Começar agora
            </Link>
          </nav>
        </details>
      </div>
    </header>
  )
}

function DashboardPreview() {
  return (
    <div className='preview-wrap'>
      <div className='preview-glow' />
      <div className='dashboard-card'>
        <div className='dash-top'>
          <div>
            <p>
              Olá, Gabriel <span>👋</span>
            </p>
            <h2>Continue evoluindo</h2>
          </div>
          <div className='avatar'>GS</div>
        </div>
        <div className='stat-grid'>
          <div className='mini-stat'>
            <span>Questões feitas</span>
            <strong>1.284</strong>
            <small>↗ 12% esta semana</small>
          </div>
          <div className='mini-stat'>
            <span>Taxa de acertos</span>
            <strong>78%</strong>
            <small>↗ 4% este mês</small>
          </div>
        </div>
        <div className='weekly'>
          <div>
            <span>Meta semanal</span>
            <strong>
              164 <em>de 200 questões</em>
            </strong>
          </div>
          <b>82%</b>
          <div className='progress'>
            <i style={{ width: '82%' }} />
          </div>
          <small>Faltam 36 questões para sua meta</small>
        </div>
        <div className='performance'>
          <div className='performance-head'>
            <strong>Desempenho por área</strong>
            <a href='#areas'>Ver detalhes</a>
          </div>
          <Performance label='Sistema Único de Saúde' value={86} />
          <Performance label='Fisioterapia' value={79} />
          <Performance label='Português' value={68} />
        </div>
        <div className='streak'>
          <span>🔥</span>
          <div>
            <strong>7 dias de sequência!</strong>
            <small>Você está construindo um ótimo hábito.</small>
          </div>
        </div>
      </div>
    </div>
  )
}

function Performance({ label, value }: { label: string; value: number }) {
  return (
    <div className='performance-row'>
      <div>
        <span>{label}</span>
        <b>{value}%</b>
      </div>
      <div className='progress light'>
        <i style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className='hero' id='questoes'>
          <div className='hero-orb orb-one' />
          <div className='hero-orb orb-two' />
          <div className='container hero-grid'>
            <div className='hero-copy'>
              <div className='eyebrow'>
                <Icon name='sparkles' size={16} /> Sua preparação inteligente
                começa aqui
              </div>
              <h1>
                Conhecimento que
                <br />
                leva você à <span>aprovação.</span>
              </h1>
              <p>
                Questões, simulados e revisão inteligente em uma plataforma
                criada para quem quer conquistar seu lugar na área da saúde.
              </p>
              <div className='hero-actions'>
                <Link className='button' href='#areas'>
                  Resolver questões <Icon name='arrow' size={18} />
                </Link>
                <Link className='button secondary' href='#simulados'>
                  <span className='play'>▶</span> Criar simulado
                </Link>
              </div>
              <div className='benefits'>
                <span>
                  <i>
                    <Icon name='check' size={14} />
                  </i>{' '}
                  Questões comentadas
                </span>
                <span>
                  <i>
                    <Icon name='check' size={14} />
                  </i>{' '}
                  Revisão inteligente
                </span>
                <span>
                  <i>
                    <Icon name='check' size={14} />
                  </i>{' '}
                  Comece grátis
                </span>
              </div>
              <div className='social-proof'>
                <div className='faces'>
                  <span>MF</span>
                  <span>RS</span>
                  <span>AL</span>
                  <span>+</span>
                </div>
                <div>
                  <b>+12 mil estudantes</b>
                  <small>já estudam com a Cortex</small>
                </div>
                <div className='rating'>
                  <b>★ 4,9</b>
                  <small>avaliação média</small>
                </div>
              </div>
            </div>
            <DashboardPreview />
          </div>
        </section>
        <section className='subjects' id='areas'>
          <div className='container'>
            <div className='section-heading'>
              <span>CONTEÚDOS</span>
              <h2>
                Tudo o que você precisa.
                <br />
                <em>Em um só lugar.</em>
              </h2>
              <p>
                Escolha sua área, filtre pela banca e comece uma sessão de
                estudos focada no seu objetivo.
              </p>
            </div>
            <div className='subject-grid'>
              {subjects.map((s) => (
                <a href='#cadastro' className='subject-card' key={s.title}>
                  <div className='subject-icon'>
                    <Icon name={s.icon} size={24} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <footer>
                    <span>{s.count}</span>
                    <Icon name='arrow' size={17} />
                  </footer>
                </a>
              ))}
            </div>
            <div className='subjects-cta'>
              Mais de <strong>68 mil questões</strong> esperando por você.{' '}
              <Link href='#cadastro'>
                Explorar todas as áreas <Icon name='arrow' size={16} />
              </Link>
            </div>
          </div>
        </section>
        <section className='how' id='como-funciona'>
          <div className='container'>
            <span className='kicker'>COMO FUNCIONA</span>
            <h2>Seu estudo, do seu jeito.</h2>
            <div className='steps'>
              <article>
                <b>01</b>
                <h3>Escolha seu foco</h3>
                <p>Filtre por área, banca, ano e dificuldade.</p>
              </article>
              <article>
                <b>02</b>
                <h3>Pratique de verdade</h3>
                <p>Resolva questões e entenda cada comentário.</p>
              </article>
              <article>
                <b>03</b>
                <h3>Evolua todo dia</h3>
                <p>Acompanhe seus dados e revise seus erros.</p>
              </article>
            </div>
          </div>
        </section>
        <section className='final-cta' id='cadastro'>
          <div className='container'>
            <div>
              <span>PRONTO PARA COMEÇAR?</span>
              <h2>Sua aprovação começa com uma questão.</h2>
              <p>Crie sua conta grátis e comece a estudar agora.</p>
            </div>
            <Link className='button white' href='#questoes'>
              Começar gratuitamente <Icon name='arrow' size={18} />
            </Link>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className='container'>
          <Logo />
          <p>© 2026 Cortex Saúde. Conhecimento que aprova.</p>
        </div>
      </footer>
    </>
  )
}
