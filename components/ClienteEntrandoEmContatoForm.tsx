"use client";

// Importa React e hook de estado
import React, { useState } from "react";

// Tipagem das props do componente
interface BookClassSectionProps {
  backgroundImage?: string;
}

const BookClassSection: React.FC<BookClassSectionProps> = ({
  // Imagem padrão de fundo
  backgroundImage = "/AtmosferaSection1.png",
}) => {
  // Estado do formulário
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    yogaClass: "Hatha Yoga",
  });

  // Estado de erro do telefone
  const [phoneError, setPhoneError] = useState("");

  // Verifica se o input foi tocado
  const [phoneTouched, setPhoneTouched] = useState(false);

  // Aplica máscara: +55 (XX) XXXXX-XXXX
  const applyPhoneMask = (value: string): string => {
    // Remove caracteres não numéricos
    const digits = value.replace(/\D/g, "").slice(0, 13);

    if (digits.length === 0) return "";

    // Apenas código do país
    if (digits.length <= 2) return `+${digits}`;

    let masked = `+${digits.slice(0, 2)} `;

    // Monta DDD
    if (digits.length <= 4) return `${masked}(${digits.slice(2)}`;

    masked += `(${digits.slice(2, 4)}) `;

    // Número parcial
    if (digits.length <= 9) return `${masked}${digits.slice(4)}`;

    // Número completo
    masked += `${digits.slice(4, 9)}-${digits.slice(9)}`;

    return masked;
  };

  // Valida telefone brasileiro
  const validatePhone = (value: string): string => {
    // Remove máscara
    const digits = value.replace(/\D/g, "");

    // Campo vazio
    if (digits.length === 0) return "Telefone é obrigatório.";

    // Valida DDI do Brasil
    if (!digits.startsWith("55")) return "Use o código do Brasil: +55";

    // Número incompleto
    if (digits.length < 13) return "Número incompleto. Ex: +55 (11) 91234-5678";

    return "";
  };

  // Atualiza campos do formulário
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    // Tratamento especial do telefone
    if (name === "phone") {
      const masked = applyPhoneMask(value);

      setFormData((prev) => ({
        ...prev,
        phone: masked,
      }));

      // Valida enquanto digita
      if (phoneTouched) setPhoneError(validatePhone(masked));

      return;
    }

    // Atualiza demais campos
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Valida ao sair do input
  const handlePhoneBlur = () => {
    setPhoneTouched(true);
    setPhoneError(validatePhone(formData.phone));
  };

  // Envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verifica telefone
    const error = validatePhone(formData.phone);

    if (error) {
      setPhoneTouched(true);
      setPhoneError(error);
      return;
    }

    // Exibe dados preenchidos
    alert(
      `Dados do formulário:\n\n` +
        `Nome: ${formData.name}\n` +
        `Telefone: ${formData.phone}\n` +
        `Aula: ${formData.yogaClass}`,
    );
  };

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 md:py-24"
      style={{
        // Fundo da seção
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50 z-0" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          style={{
            boxShadow: "0px 10px 40px rgba(0,0,0,0.2)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Coluna esquerda */}
            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                {/* Título */}
                <h2
                  className="text-[24px] font-bold text-black mb-4"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  Book class
                </h2>

                {/* Texto principal */}
                <p
                  className="text-[18px] text-[#88909B] leading-relaxed mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                  }}
                >
                  santosha is a modern yoga studio where everyone can find their
                  perfect practice. We&apos;ve created a welcoming space with
                  professional instructors to help you achieve harmony,
                  strength, and flexibility.
                </p>

                {/* Texto secundário */}
                <p
                  className="text-[18px] text-[#88909B] leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Our classes suit all levels, from beginners to advanced
                  practitioners.
                </p>
              </div>

              {/* Informações de contato */}
              <address
                className="not-italic mt-8 md:mt-0"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "18px",
                  color: "#4B5563",
                  lineHeight: "1.6",
                }}
              >
                <p>
                  Saint-Petersburg
                  <br />
                  Peace st. 42
                </p>

                <p className="mt-3">+7 900 200 90 90</p>

                {/* Email */}
                <a
                  href="mailto:Example@mail.ru"
                  className="block mt-1 hover:opacity-70 transition-opacity"
                  style={{ color: "#4B5563" }}
                >
                  Example@mail.ru
                </a>
              </address>
            </div>

            {/* Coluna direita */}
            <div className="p-8 md:p-10 md:pl-12 border-t md:border-t-0 md:border-l border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campo nome */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-black text-[16px] mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-[50px] px-4 border border-[#D1D5DB] rounded-lg outline-none focus:border-[#C29D73] focus:ring-1 focus:ring-[#C29D73] transition bg-white text-black text-[16px]"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                    }}
                  />
                </div>

                {/* Campo telefone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-black text-[16px] mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+55 (11) 91234-5678"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handlePhoneBlur}
                    className={`w-full h-[50px] px-4 border rounded-lg outline-none transition bg-white text-black text-[16px] ${
                      // Borda vermelha em caso de erro
                      phoneError && phoneTouched
                        ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400"
                        : "border-[#D1D5DB] focus:border-[#C29D73] focus:ring-1 focus:ring-[#C29D73]"
                    }`}
                    style={{
                      fontFamily: "'Lato', sans-serif",
                    }}
                  />

                  {/* Mensagem de erro */}
                  {phoneError && phoneTouched && (
                    <p
                      className="mt-1.5 text-[13px] text-red-500"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                      }}
                    >
                      {phoneError}
                    </p>
                  )}
                </div>

                {/* Select de aulas */}
                <div>
                  <label
                    htmlFor="class"
                    className="block text-black text-[16px] mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Select Class
                  </label>

                  <div className="relative">
                    <select
                      id="class"
                      name="yogaClass"
                      value={formData.yogaClass}
                      onChange={handleChange}
                      className="w-full h-[47px] px-3 pr-10 border border-[#D1D5DB] rounded-lg outline-none focus:border-[#C29D73] focus:ring-1 focus:ring-[#C29D73] transition bg-white text-black text-[16px] appearance-none cursor-pointer"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                      }}
                    >
                      <option>Hatha Yoga</option>
                      <option>Vinyasa Flow</option>
                      <option>Ashtanga Yoga</option>
                      <option>Yin Yoga</option>
                      <option>Kundalini Yoga</option>
                    </select>

                    {/* Ícone da seta */}
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="#374151"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Botão enviar */}
                <button
                  type="submit"
                  className="w-full h-[56px] rounded-lg text-white text-[16px] font-normal transition-opacity hover:opacity-85"
                  style={{
                    backgroundColor: "#C29D73",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookClassSection;
