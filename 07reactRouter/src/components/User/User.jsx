import { useParams } from "react-router";

function User() {
  const { userid } = useParams();
  return (
    <section className="mx-auto max-w-3xl rounded-4xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/20 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
        Dynamic route
      </p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
        User: {userid}
      </h1>
      <p className="mt-4 text-slate-300">
        This page keeps the route logic exactly the same and just presents the
        parameter with a cleaner visual hierarchy.
      </p>
    </section>
  );
}

export default User;
