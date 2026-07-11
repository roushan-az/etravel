import { useState } from 'react';
import {
  ChevronDown,
  Mail,
  MapPin,
  BookOpen,
  Wallet,
  Clock,
  CreditCard,
  XCircle,
  RotateCcw,
  IdCard,
  Car,
  Plane,
  ShieldAlert,
  CloudLightning,
  Gavel,
  Info,
  Phone,
} from 'lucide-react';

const sections = [
  {
    id: 'booking',
    icon: BookOpen,
    title: 'Booking',
    body: (
      <p>
        On confirmation of booking, your contract is with M/s Tour Planners. A contract
        exists between us when we confirm your tour/travel services and have received the
        deposit amount from your end.
      </p>
    ),
  },
  {
    id: 'payment',
    icon: Wallet,
    title: 'Payment',
    body: (
      <p>
        For the services contracted, a minimum deposit of <strong>50% of the total cost</strong> is
        to be paid by you to M/s Tour Planners. The deposit is required to hold the booking
        on a confirmed basis.
      </p>
    ),
  },
  {
    id: 'balance-payment',
    icon: Clock,
    title: 'Balance Payment',
    body: (
      <div className="space-y-3">
        <p>
          Balance payment is to be made <strong>15 days prior</strong> to the date of start of
          services. Any booking made within 15 working days of the date of services would be
          considered a late booking, for which the full and final payment is required at the
          time of booking itself.
        </p>
        <p className="bg-primary-50 border border-primary-100 rounded-lg p-4 text-sm">
          <span className="font-semibold text-primary-700">Note: </span>
          For bookings involving special train journeys, hotel or resort bookings during peak
          season (X-Mas, New Year, Pushkar Fair, Diwali, etc.), full payment is required at
          the time of booking itself.
        </p>
      </div>
    ),
  },
  {
    id: 'mode-of-payment',
    icon: CreditCard,
    title: 'Mode of Payment',
    body: (
      <div className="space-y-4">
        <p>Clients can make payment using any of the following methods:</p>
        <ul className="grid sm:grid-cols-2 gap-2">
          {['Cheque / Demand Draft', 'Bank Transfer', 'QR Code', 'Credit Card / Debit Card'].map((m) => (
            <li key={m} className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2.5 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
              {m}
            </li>
          ))}
        </ul>
        <ul className="space-y-2 text-sm text-gray-600 list-disc list-outside pl-5">
          <li>All payments should be free and clear of any withholding tax and deduction.</li>
          <li>
            Bank charges, if any, for remittance (by remitting bank or intermediary bank)
            would be strictly borne by the payer.
          </li>
          <li>
            For payment via QR / credit / debit card, applicable bank charges of{' '}
            <strong>2.5%</strong> are to be borne by the payer.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'cancellation',
    icon: XCircle,
    title: 'Cancellation / No Show / Early Departure',
    body: (
      <div className="space-y-3 text-sm">
        <p>
          In case of cancellation of tour/travel services due to any avoidable or unavoidable
          reason, we must be informed <strong>in writing</strong>. Cancellation charges are
          calculated on the total booking amount, not on the advance deposited.
        </p>
        <ul className="space-y-2 list-disc list-outside pl-5 text-gray-600">
          <li>
            A minimum <strong>10% cancellation charge</strong> applies on the total cost of the
            tour package; the remaining amount (after deducting this service charge) would be
            refunded.
          </li>
          <li>
            The refund is strictly restricted to the amount we're able to recover from
            hoteliers, airlines, transporters and other suppliers we work with.
          </li>
          <li>
            If a hotel, transport company, airline or service provider issues a Credit Note,
            the client is provided with the Credit Note only. It can be used at any point in
            the future by the client, their family, friends, or anyone else they recommend.
          </li>
          <li>
            We do not bear responsibility to refund unused hotel accommodation, flight
            tickets, transportation, missed meals or other services.
          </li>
          <li>
            Special train journeys (Palace on Wheels, Deccan Odyssey, Golden Chariot &
            Maharajas Express) follow a separate cancellation policy, advised as and when
            required.
          </li>
          <li className="font-medium text-gray-800">
            No refund is made if the following bookings are cancelled, for any reason:
            festival-period bookings (Diwali, Dussehra, Holi, Pushkar Fair, etc.), high peak
            season bookings (20th Dec – 15th Jan), and long-weekend bookings.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'refund',
    icon: RotateCcw,
    title: 'Refund',
    body: (
      <p>
        The refund process may take <strong>2–4 weeks</strong> due to banking procedures. If
        the refund is made to a credit card or bank account, applicable bank charges would be
        debited from the refund amount.
      </p>
    ),
  },
  {
    id: 'identification',
    icon: IdCard,
    title: 'Mandatory Identification Document',
    body: (
      <div className="space-y-3 text-sm">
        <p>
          It is mandatory for all guests — foreign nationals, NRIs and Indian nationals — to
          provide photo ID at the time of booking confirmation:
        </p>
        <ul className="space-y-2 list-disc list-outside pl-5 text-gray-600">
          <li>Foreign nationals — copy of Passport + Visa.</li>
          <li>Non-Resident Indian (NRI) clients — copy of passport.</li>
          <li>Overseas Indian clients holding OCI / PIO card — copy of passport and OCI/PIO card.</li>
          <li>Domestic clients — copy of Driving Licence / Voter ID Card / Passport.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'extra-vehicle',
    icon: Car,
    title: 'Extra Usage of Vehicle',
    body: (
      <p>
        The cost of extra usage of vehicle (cars / coaches with driver) is not included in
        the services, and hence extra usage of a vehicle after transfer or after sightseeing
        is not allowed.
      </p>
    ),
  },
  {
    id: 'helicopter',
    icon: Plane,
    title: 'Special Note for Helicopter Journeys',
    body: (
      <ol className="space-y-2 list-decimal list-outside pl-5 text-sm text-gray-600">
        <li>Helicopter tickets and fares are subject to availability and can change at any moment.</li>
        <li>
          While Tour Planners takes utmost care to get you flying by helicopter, sudden weather
          conditions, VIP movement or other unavoidable situations can make it unavailable at
          the last moment. We make every possible attempt to arrange an alternate helicopter
          journey the same day or on alternate dates, subject to availability.
        </li>
        <li>No ticket is carried forward to the next day.</li>
        <li>
          No accommodation, meal or transport cost would be paid, reimbursed or compensated
          due to cancellation of a helicopter.
        </li>
        <li>
          Helicopter yatras (Chardham, Teen Dham, Do Dham, Ek Dham, Vaishno Devi, Amarnath)
          follow a separate cancellation policy, advised on a case-to-case basis.
        </li>
      </ol>
    ),
  },
  {
    id: 'liabilities',
    icon: ShieldAlert,
    title: 'Our Liabilities & Limitations',
    body: (
      <div className="space-y-3 text-sm text-gray-600">
        <p>
          If, after finalization of the tour/service cost, there are hikes in entrance fees of
          monuments/museums, taxes, fuel cost or guide charges by the Government of India, the
          same would be charged as extra.
        </p>
        <p>
          Our rates are based on the prevailing rates negotiated with hotels, airlines, etc.
          Hotels and airlines retain the right to modify rates without notice — in such cases,
          our quoted rates may change accordingly.
        </p>
        <p>
          Tour Planners and its associates act only in the capacity of an agent for hotels,
          airlines, transporters, railways and other service contractors. All exchange orders,
          receipts, contracts and tickets we issue are subject to the terms and conditions
          under which those services are provided. The ticket, coupon or passage contract in
          use by the carrier, hotel or other contractor constitutes the sole contract between
          the client and that contractor.
        </p>
        <p>
          Tour Planners shall not be responsible for any delay, change in programme, or
          expenses, loss, injury or damage — direct or indirect — arising from natural
          hazards, flight cancellations, accidents, equipment or transport breakdowns,
          weather, sickness, landslides, political closures, acts of God, perils of the sea,
          floods, fire, government action, wars, civil disturbances, riots, theft, epidemics,
          quarantines, medical or customs regulations, defaults, or any other cause beyond our
          control. Clients shall be liable for any extra expense incurred as a result of the
          foregoing causes.
        </p>
        <p>
          We shall not accept liability toward clients or their legal representatives for loss
          of property, injury, or death arising from the act, negligence or default of any
          transportation company, hotel, agent or other service provider — regardless of how
          it was caused. Clients using sporting equipment, bicycles, sailing boats or scuba
          gear hired or supplied by hotels or rental bodies do so at their own risk.
        </p>
        <p>
          Tour Planners does not carry an insurance policy covering expenses for accident,
          sickness or theft. Visitors are advised to arrange their own travel insurance in
          their home country. All baggage and personal property is at the client's risk at all
          times.
        </p>
        <p>
          Tour Planners reserves the right to cancel any service it deems impracticable, upon
          refunding the value thereof, and the client shall have no further claim against the
          company on that account. Tour Planners also reserves the right to decline any person
          it considers undesirable, at its absolute discretion, without needing to show cause.
        </p>
      </div>
    ),
  },
  {
    id: 'force-majeure',
    icon: CloudLightning,
    title: 'Force Majeure',
    body: (
      <div className="space-y-3 text-sm text-gray-600">
        <p>
          Tour Planners, its proprietor, subsidiaries, affiliates, officers, employees, agents
          and suppliers shall not be responsible or deemed in default for failure or delay in
          performing any obligation where performance is made impracticable by acts of war
          (declared or undeclared), sabotage, embargo, terrorism, riot or civil commotion,
          transportation failure, government or court action, acts of God, fire, explosion,
          flood, earthquake, strike, pandemic, epidemic, disease outbreak, quarantine
          restriction, or any other cause beyond our reasonable control ("Force Majeure").
        </p>
        <p>
          Both Tour Planners and the client shall use their best efforts to avoid, overcome and
          offset the effects of any Force Majeure event. Once the cause of the Force Majeure
          ceases, these terms and conditions become fully operative again.
        </p>
      </div>
    ),
  },
  {
    id: 'jurisdiction',
    icon: Gavel,
    title: 'Jurisdiction Clause',
    body: (
      <p>
        All disputes arising out of this agreement, or any subsequent agreement, are subject
        to the exclusive jurisdiction of the <strong>Ghaziabad Courts</strong> only.
      </p>
    ),
  },
  {
    id: 'special-notes',
    icon: Info,
    title: 'Special Notes',
    body: (
      <ul className="space-y-2 list-disc list-outside pl-5 text-sm text-gray-600">
        <li>Terms & conditions for Andaman & Nicobar Islands and Lakshadweep are separate and advised on a case-to-case basis.</li>
        <li>Terms & conditions for group bookings are separate and advised on a case-to-case basis.</li>
        <li>
          Terms & conditions for helicopter yatras (Chardham, Teen Dham, Do Dham, Ek Dham,
          Vaishno Devi, Amarnath) and any other helicopter tour are separate and advised on a
          case-to-case basis.
        </li>
        <li>
          Terms & conditions for tourist/luxury trains (Palace on Wheels, Deccan Odyssey,
          Maharajas Express, Golden Chariot) and any other tourist/luxury train are separate
          and advised on a case-to-case basis.
        </li>
      </ul>
    ),
  },
];

function AccordionItem({ section, isOpen, onToggle }) {
  const Icon = section.icon;
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-4">
          <span
            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
              isOpen
                ? 'bg-gradient-to-br from-primary-600 to-orange-600 text-white'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            <Icon size={18} />
          </span>
          <span className="font-display font-semibold text-gray-900 text-base md:text-lg">
            {section.title}
          </span>
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-primary-600' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-6 pl-[4.75rem] text-gray-600 leading-relaxed">
            {section.body}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TermsPage() {
  const [openId, setOpenId] = useState('booking');

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-sm font-semibold mb-5">
            Legal
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Please read these terms carefully before confirming a booking with Tour Planners.
            Tap any section below to expand it.
          </p>
        </div>
      </section>

      {/* Correspondence note */}
      <section className="container mx-auto px-4 -mt-8">
        <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-5 md:p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
            <Mail size={18} />
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            <span className="font-semibold text-gray-900">Correspondence: </span>
            All correspondence in respect of tours, travel services and bookings should be
            addressed to <span className="font-semibold text-gray-900">M/s. Tour Planners</span>.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {sections.map((section) => (
              <AccordionItem
                key={section.id}
                section={section}
                isOpen={openId === section.id}
                onToggle={() => toggle(section.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Questions / contact strip */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-10 text-white">
            <h2 className="text-xl md:text-2xl font-display font-bold mb-2">
              Questions about these terms?
            </h2>
            <p className="text-gray-400 mb-6">
              Our team is happy to walk you through any clause before you book.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="tel:+919717580133"
                className="flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors text-sm font-medium"
              >
                <Phone size={16} /> +91 971 758 0133
              </a>
              <a
                href="mailto:tourplanners2@gmail.com"
                className="flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors text-sm font-medium"
              >
                <Mail size={16} /> tourplanners2@gmail.com
              </a>
              <span className="flex items-center gap-2 px-5 py-3 bg-gray-800 rounded-lg text-sm font-medium">
                <MapPin size={16} /> Ghaziabad, Delhi-NCR
              </span>
            </div>

      1   </div>
        </div>
      </section>
    </div>
  );
}