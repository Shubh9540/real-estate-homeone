export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  hasDropdown?: boolean;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  contactButton: { text: string; url: string };
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface TopBarData {
  tagline: string;
  taglineIcon: string;
  phoneValue: string;
  emailValue: string;
  locationValue: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface TopBarProps {
  data?: TopBarData;
  logoData?: HeaderData;
}

export interface HeroButtonData {
  text: string;
  url: string;
  icon?: string;
}

export interface HeroData {
  eyebrow: string;
  titleLine1: string;
  highlightedTitle: string;
  description: string;
  primaryButton: HeroButtonData;
  secondaryButton?: HeroButtonData;
  image: string;
  imageAlt: string;
}

export interface HeroProps {
  data?: HeroData;
}

export interface AboutFeature {
  id: string;
  icon: string;
  label: string;
}

export interface AboutUsData {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  highlightedTitle: string;
  description: string;
  features: AboutFeature[];
  button?: {
    text: string;
    url: string;
  };
  imageMain: string;
  imageMainAlt: string;
  imageSecondaryLeft: string;
  imageSecondaryLeftAlt: string;
  imageSecondaryRight: string;
  imageSecondaryRightAlt: string;
}

export interface AboutUsProps {
  data?: AboutUsData;
  hideButton?: boolean;
}

export interface RealEstateServiceItem {
  id: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  url: string;
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  linkText: string;
  services: RealEstateServiceItem[];
}

export interface ServicesProps {
  data?: ServicesData;
  isSlider?: boolean;
}

export interface ServiceCardProps {
  service: RealEstateServiceItem;
  linkText: string;
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  imageMain: string;
  imageAlt: string;
  features: WhyChooseUsFeature[];
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface PropertyFeature {
  id: string;
  icon: string;
  label: string;
}

export interface PropertyCardItem {
  id: string;
  title: string;
  location: string;
  locationIcon: string;
  propertyCount: string;
  propertyCountIcon: string;
  image: string;
  imageAlt: string;
  url: string;
  features: PropertyFeature[];
}

export interface OurPropertiesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  viewText: string;
  previousLabel: string;
  nextLabel: string;
  slideLabel: string;
  properties: PropertyCardItem[];
}

export interface OurPropertiesProps {
  data?: OurPropertiesData;
}

export interface AgentStat {
  id: string;
  value: string;
  label: string;
}

export interface AgentItem {
  id: string;
  name: string;
  role: string;
  location: string;
  locationIcon: string;
  category: string;
  image: string;
  imageAlt: string;
  profileUrl: string;
  contactUrl: string;
  stats: AgentStat[];
}

export interface AgentsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  viewAllText: string;
  viewAllUrl: string;
  profileText?: string;
  contactText?: string;
  agents: AgentItem[];
}

export interface AgentsProps {
  data?: AgentsData;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  previousLabel: string;
  nextLabel: string;
  slideLabel: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface ContactItemLine {
  id: string;
  text: string;
}

export interface ContactPanelItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactItemLine[];
  url?: string;
}

export interface ContactSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface ContactData {
  backgroundImage: string;
  backgroundImageAlt: string;
  intro: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
  };
  form: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    fullNamePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
  };
  contactPanel: {
    eyebrow: string;
    title1: string;
    titleHighlight: string;
    description: string;
    items: ContactPanelItem[];
    socialTitle: string;
    socialLinks: ContactSocialLink[];
  };
  location?: {
    eyebrow?: string;
    title1?: string;
    titleHighlight?: string;
    description?: string;
    mapIframeUrl?: string;
  };
}

export interface ContactProps {
  data?: ContactData;
}

export interface FooterSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface FooterLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterContactItem {
  id: string;
  icon: string;
  title: string;
  value: string;
  url?: string;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  copyrightText: string;
  description: string;
  quickLinksTitle: string;
  contactTitle: string;
  companyTitle: string;
  socialLinks: FooterSocialLink[];
  quickLinks: FooterLink[];
  contactItems: FooterContactItem[];
  companyLinks: FooterLink[];
}

export interface FooterProps {
  data?: FooterData;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
}

export interface ComponentItem {
  key: string;
  component: string;
}

export interface PageComponents {
  components: ComponentItem[];
}

export interface TemplateComponentsData {
  pages: Record<string, PageComponents>;
}

export interface PageComponentRegistry {
  components: string[];
}

export interface FontConfig {
  primary: string;
  heading: string;
}

export interface FourHomelessTemplateData {
  common: {
    metadata: SiteMetadataData;
    font?: FontConfig;
    Footer?: FooterData;
  };
  categories: {
    RealEstate: {
      templateComponents?: TemplateComponentsData;
      sections: {
        TopBar?: { variants?: { FourHomelessTopBar2?: TopBarData } };
        Header?: { variants?: { FourHomelessHeader2?: HeaderData } };
        Hero?: { variants?: { FourHomelessHero2?: HeroData } };
        AboutUs?: { variants?: { FourHomelessAboutUs2?: AboutUsData } };
        Services?: { variants?: { FourHomelessServices2?: ServicesData } };
        whyChooseUs?: { variants?: { FourHomelessWhyChooseUs2?: WhyChooseUsData } };
        OurProperties?: { variants?: { FourHomelessOurProperties2?: OurPropertiesData } };
        Agents?: { variants?: { FourHomelessAgents2?: AgentsData } };
        Testimonials?: { variants?: { FourHomelessTestimonials2?: TestimonialsData } };
        contact?: { variants?: { FourHomelessContact2?: ContactData } };
      };
    };
  };
  pages: Record<string, PageComponentRegistry>;
}
