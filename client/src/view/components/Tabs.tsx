import { useMemo } from "react";
import * as RdxTabs from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner } from "./Spinner";
import { Application as ApplicationComponent } from "./Application";
import { ShiftsDialog } from "./ShiftsDialog/ShiftsDialog";
import { HealthUnit as HealthUnitType } from "../../shared/types/health-unit.type";
import { useApplications } from "../../shared/context/ApplicationsContext/useApplications";

interface TabsProps {
  healthUnits: HealthUnitType[];
  healthUnitsLoading: boolean;
}

export function Tabs({ healthUnits, healthUnitsLoading }: TabsProps) {
  const { applications, applicationsLoading } = useApplications();
  const tabContentVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
    }),
    []
  );

  return (
    <RdxTabs.Root className="flex h-full w-full flex-col " defaultValue="tab1">
      <RdxTabs.List
        className="flex shrink-0 items-center justify-start w-full gap-x-10 text-zinc-600 dark:text-zinc-300"
        aria-label="Manage your account"
      >
        <RdxTabs.Trigger
          className="flex h-[45px] cursor-pointer select-none items-center px-0 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-[#4062F9] data-[state=active]:font-bold data-[state=active]:border-b data-[state=active]:border-[#4062F9]"
          value="tab1"
        >
          Unidades médicas
        </RdxTabs.Trigger>

        <RdxTabs.Trigger
          className="flex h-[45px] cursor-pointer select-none items-center px-0 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-[#4062F9] data-[state=active]:font-bold data-[state=active]:border-b data-[state=active]:border-[#4062F9]"
          value="tab2"
        >
          Minhas candidaturas
        </RdxTabs.Trigger>
      </RdxTabs.List>

      <AnimatePresence>
        <RdxTabs.Content
          asChild
          className="mt-8 flex h-full flex-col flex-wrap gap-x-8 rounded-b-md black outline-none"
          value="tab1"
          key="tab1c"
        >
          <motion.div
            key="tab1"
            variants={tabContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {healthUnitsLoading ? (
              <Spinner />
            ) : (
              <div className="flex flex-wrap gap-4 text-center">
                {healthUnits?.map((healthUnit) => {
                  return (
                    <ShiftsDialog
                      name={healthUnit.name}
                      id={healthUnit.id}
                      key={healthUnit.id}
                    />
                  );
                })}
              </div>
            )}
          </motion.div>
        </RdxTabs.Content>
        <RdxTabs.Content
          asChild
          className="mt-8 flex h-full flex-wrap gap-x-8 gap-y-8 rounded-b-md black outline-none"
          value="tab2"
          key="tab2c"
        >
          <motion.div
            key="tab2"
            variants={tabContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {applicationsLoading ? (
              <Spinner />
            ) : (
              <div className="flex flex-col gap-4 w-[500px] flex-wrap text-center">
                {applications?.map((application) => {
                  return (
                    <ApplicationComponent
                      healthUnitName={application.shift.healthUnit.name!}
                      startDatetime={application.shift.startDatetime}
                      endDatetime={application.shift.endDatetime}
                      key={application.id}
                    />
                  );
                })}
              </div>
            )}
          </motion.div>
        </RdxTabs.Content>
      </AnimatePresence>
    </RdxTabs.Root>
  );
}
