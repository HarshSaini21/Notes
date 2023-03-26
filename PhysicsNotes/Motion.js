import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Motion extends React.Component {
  render() {
    return (
      <View>
        <Title>
          {" "}
          <Text> Chapter 1 :- Understanding Motion </Text>{" "}
        </Title>
        <Text>
          {" "}
          Reference point and reference frame ● To describe the position of an
          object we need a reference point or origin. An object may seem to be
          moving to one observer and stationary to another. ● Example: A
          passenger inside a bus sees the other passengers to be at rest,
          whereas an observer outside the bus sees the passengers to be in
          motion. ● In order to make observations easy, a convention or a common
          reference point or frame is needed. All objects must be in the same
          reference frame To know more about the frame of reference, visit here.
        </Text>
        <Text>
          Distance and Displacement The magnitude of the length covered by a
          moving object is called distance. It has no direction. Displacement is
          the shortest distance between two points or the distance between the
          starting and final positions with respect to time. It has magnitude as
          well as direction. Displacement can be zero, but distance{" "}
        </Text>

        <Text>
          {" "}
          Magnitude Magnitude is the size or extent of a physical quantity. In
          physics, we have scalar and vector quantities. Scalar quantities are
          only expressed as magnitude. E.g: time, distance, mass, temperature,
          area, volume Vector quantities are expressed in magnitude as well as
          the direction of the object. E.g: Velocity, displacement, weight,
          momentum, force, acceleration, etc.
        </Text>
        <Text>
          {" "}
          Time, Average Speed and Velocity Time and speed Time is the duration
          of an event that is expressed in seconds. Most physical phenomena
          occur with respect to time. It is a scalar quantity. Speed is the rate
          of change of distance. If a body covers a certain distance in a
          certain amount of time, its speed is given by Speed = Distance/Time.
          The instantaneous speed is the speed of an object at a particular
          moment in time. Average speed is stated as the distance covered by the
          object within a period of time. Average speed = Total distance
          travelled / Total time taken The below table lists the difference
          between Average Speed and Instantaneous Speed. Average Speed It is
          defined as the total distance travelled divided by the total time
          elapsed. Instantaneous Speed :- It is defined as the speed at a
          particular instant of time. It is constant Instantaneous Speed :- It
          is not constant Measured by calculating the speed for an entire
          journey It is measured by a speedometer Example: A car travelling with
          a speed of 60 kmph. Thus, the average speed of the car is 60 km an
          hour Instantaneous Speed :- Example: A car travelling at a certain
          speed at an instant of time can be given by a speedometer.
        </Text>

        <Text>
          {" "}
          Uniform motion and Non-uniform motion When an object covers equal
          distances in equal intervals of time it is in uniform motion. Examples
          of Uniform Motion ● Movement of the ceiling fan’s blades. ● Motion of
          earth around the sun ● Pendulum with equivalent amplitude on either
          side When an object covers unequal distances in equal intervals of
          time it is said to be in non-uniform motion. ● Bouncing ball ● Running
          horse ● Moving train
        </Text>
        <Text>
          {" "}
          Velocity The rate of change of displacement is velocity. It is a
          vector quantity. Here the direction of motion is specified. Velocity =
          Displacement/Time Taken. Instantaneous velocity is the rate of change
          of position for a time interval which is very small i.e. almost zero.
          In more simple words, the velocity of an object at a given instant of
          time is known as instantaneous velocity. Average velocity is defined
          as the displacement (∆x) divided by the time intervals (∆t) in which
          the displacement occurs. Average Velocity = Initial Velocity + Final
          Velocity/2. Instantaneous velocity is the rate of change of position
          for a time interval which is very small i.e. almost zero. In more
          simple words, the velocity of an object at a given instant of time is
          known as instantaneous velocity. Average velocity is defined as the
          displacement (∆x) divided by the time intervals (∆t) in which the
          displacement occurs.
        </Text>
        <Text>
          {" "}
          Acceleration The rate of change of velocity is called acceleration. It
          is a vector quantity. In non-uniform motion, velocity varies with
          time, i.e., the change in velocity is not 0. It is denoted by “a”
          Acceleration = Change in Velocity / Time (OR) a = v-u/t Where, t (time
          taken), v (final velocity) and u (initial velocity)
        </Text>
        <Text>
          {" "}
          Equations of Motion The motion of an object moving at uniform
          acceleration can be described with the help of three equations, namely
          (i) v = u + at (ii) v2 – u2 = 2as (iii) s = ut + (1/2)at2 where u is
          the initial velocity, v is the final velocity, t is the time, a is the
          acceleration and s is the displacement.
        </Text>
        <Text>
          Uniform Circular Motion Uniform circular motion ● If an object moves
          in a circular path with uniform speed, its motion is called uniform
          circular motion. ● Velocity is changing as direction keeps changing. ●
          Acceleration is constant ● The uniform circular velocity is given by
          the following formula: v = 2r/t v is the uniform circular velocity, r
          is the radius of the circular path and t is the time. Uniform Circular
          Motion Examples ● Motion of artificial satellites around the earth is
          an example of uniform circular motion. ● The motion of electrons
          around its nucleus. ● The motion of blades of the windmills. ● The tip
          of the second hand of a watch with a circular dial shows uniform
          circular motion.
        </Text>
      </View>
    );
  }
}

const styles = Stylesheet.create({});
