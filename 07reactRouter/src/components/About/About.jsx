export default function About() {
  return (
    <section className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8 lg:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/40 p-3">
          <img
            className="h-full w-full rounded-[1.25rem] object-cover"
            src="https://images.pexels.com/photos/4578665/pexels-photo-4578665.jpeg"
            alt="team working"
          />
        </div>
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
            About this build
          </div>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            React development is carried out by passionate developers
          </h2>
          <p className="text-base leading-7 text-slate-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
            voluptatem accusantium nemo perspiciatis delectus atque autem!
            Voluptatum tenetur beatae unde aperiam, repellat expedita
            consequatur! Officiis id consequatur atque doloremque!
          </p>
          <p className="text-base leading-7 text-slate-300">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>
        </div>
      </div>
    </section>
  );
}
